from django.shortcuts import render
from rest_framework import generics

from .models import Card
from .serializers import CardSerializer

class ListCard(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class DetailCard(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

