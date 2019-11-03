
# Django


### create project
```
django-admin startproject mysite
```

### runserver

```
python manage.py runserver
```

### create app

1. run
```
python manage.py startapp webapp
```
2. in mysite/settings
```
add 'webapp' INSTALLED_APPS
```
in mysite/urls, add to urlpatterns.
```
from django.urls import path, include
urlspatterns = [
    ...
    path('webapp/', include('webapp.urls')),
  ]
```
_The urlpatterns list routes URLs to views. In our case, instead of routing directly to a view, we defer to our app's urls.py_

### basic views

1. in webapp/views, add
```
from django.http import HttpResponse
def index(request):
    return HttpResponse("<h2>HEY!</h2>")
```
2. create webapp/urls.py and add
```
from django.conf.urls import url
from . import views
urlspatterns = [
    url(r'^$', views.index, name="index")
]
```
_# if the url is blank, after whatever got us here (/webapp/ in our case) then return views.index_

### basic models

1. in webapp/models
```
class myModel(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    def __str__(self):
        return self.title
```
2. run
```
python manage.py makemigrations
python manage.py migrate
```
3. in mysite/settings
```
from .models import myModel
admin.site.register(myModel)
```

### create superuser

```
python manage.py createsuperuser
```

### Add business logic
1. in the app, create logic.py at level of models.py
```
class HoldingsAnalyser:
    # static method sample. Call it like this: "HoldingsAnalyser.run(..)"
    @staticmethod
    def run(holding_list):
        # do your model generation here or whatever you need
        return True # or whatever you need to return

    # instance method sample. Create an instance first and then call the method:
    # analyser = HoldingsAnalyser()
    # analyser.run(...)
    def run(self, holding_list):
        # do your model generation here or whatever you need
        return True # or whatever you need to return
```
2. Now, in a django-rest-framework api view or viewset, create a POST method to be called when the client app user press the button (that button to generate analysis):
```
from yourapp.logic import HoldingsAnalyser
class StockPortfolioViewSet(WhatEverMixingYouNeedToInheritFrom):
    serializer_class = whatever # look at the docs

    @detail_route(methods=['post'])
    def run_analysis(self, request, pk):
        stock_portfolio = get the object based on the pk
        holdings = make your query to get the holdings
        analysis_result = HoldingsAnalyser.run(holdings)
        if analysis_result:
            # everything ok
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(a useful error for your client)
```
The url for this would be something like http://server.com/api_path/stockportfolio/21/run_analysis/, where 21 would be the id of the StockPortfolio
