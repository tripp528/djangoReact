# Django Rest Framework

_Connects frontend to backend (like Django and React)_

### Install
1. install it :)
```
conda install -c conda-forge djangorestframework
```
2. in djangoSRC/djanoProj/settings add
```
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```
```
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
```
3. in djangoSRC/djanoProj/urls.urlpatterns add
```
path(r'^api-auth/', include('rest_framework.urls'))
```

### Serializers
_These convert json data into a model. This is how frontend will parse stuff from backend._

1. in djangoSRC/webapp
```
mkdir api
cd api
touch __init__.py
touch serializers.py
```
2. in serializers
```
from rest_framework import serializers
from webapp.models import myModel
class myModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModel
        fields = ('id','field1', 'field2')
```
_We are creating an API response parser for myModel. Fields should match up with the fields of myModel._
- _note: By default, Django gives each model the id field_

### Create views to be returned by the API.
create api/views.py. [List of generic views](https://www.django-rest-framework.org/api-guide/generic-views/) (ex. ListAPIView and RetrieveAPIView)
```
from rest_framework.generics import ListAPIView, RetrieveAPIView
from webapp.models import myModel
from .serializers import myModelSerializer
#
class MyModelListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
#
class MyModelDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
```
_In webapp/models, myModel inherits from Model, so it has .objects attr by default._

### Provide a link to the views.
1. create api/urls.py
```
from django.urls import path
from .views import MyModelListView, MyModelDetailView
urlpatterns = [
    path('', MyModelListView.as_view()),
    path('<pk>', MyModelDetailView.as_view()), # primary key (pk)
]
```
_Primary key: this allows you to view the "detail view" of one of your instances of the model. ex api/1_
2. include it in the main urls
```
urlpatterns = [
    ...
    path('api/', include('articles.api.urls')),
]
```

### Allow outside access to api
1. install django-cors-headers
```
conda install -c conda-forge django-cors-headers
```
in settings
```
INSTALLED_APPS = [
    ...
    'corsheaders',
]
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]
CORS_ORIGIN_WHITELIST = [
    "example.com",
]
```

### Process data (in serializer)
##### 1. On the way out (get)
Overrides to_representation function of **rest_framework.serializers.ModelSerializer**
```
def to_representation(self, instance):
      """load what it would be without override"""
      ret = super().to_representation(instance)

      # any processing
      ret['title'] = ret['title'] + "xxx"
      return ret
```

##### 2. On the way in (post)
Overrides create() function of **rest_framework.serializers.ModelSerializer**
```
def create(self, validated_data):
      """load what it would be without override"""
      ret = self.Meta.model(**validated_data)

      # any processing
      ret.title = "onthewayin"+ret.title

      # save it
      ret.save()

      return ret
```
