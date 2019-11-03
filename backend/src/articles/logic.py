from articles.models import Article

class ArticleAnalyzer:

    @staticmethod
    def run(article):
        return {"title": article.title, "results" : article.title + "analyzed"}
        # return article.title + article.content
