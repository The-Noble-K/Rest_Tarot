from rest_framework import serializers
from .models import Card

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'meaning',
            'reversal',
            'card_id',
            'image'
        )
        model = Card

