from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListCard.as_view()),
    path('<int:pk>/', views.DetailCard.as_view()),
]