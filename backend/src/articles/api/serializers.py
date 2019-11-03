from rest_framework import serializers
from articles.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title', 'content')

    def to_representation(self, instance):
        """load what it would be without override"""
        ret = super().to_representation(instance)

        # any processing
        # ret['title'] = ret['title'] + "xxx"
        return ret

    def create(self, validated_data):
        """load what it would be without override"""
        ret = self.Meta.model(**validated_data)

        # any processing
        # ret.title = "onthewayin"+ret.title

        # save it
        ret.save()

        return ret
