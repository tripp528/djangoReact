from django.urls import path

from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleAnalyzedView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('create/', ArticleCreateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()), # primary key (pk)
    path('<pk>/analyzed', ArticleAnalyzedView.as_view()),
]
