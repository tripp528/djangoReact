from rest_framework.generics import ListAPIView, RetrieveAPIView,CreateAPIView
from rest_framework.response import Response

from articles.models import Article
from .serializers import ArticleSerializer
from articles.logic import ArticleAnalyzer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleCreateView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleAnalyzedView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request, format=None,*args, **kwargs):
        object = self.get_object()
        analyzed = ArticleAnalyzer.run(object)
        return Response(analyzed)
