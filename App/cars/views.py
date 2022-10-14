from django.shortcuts import render
from .serializers import CarSerializer 
from rest_framework import viewsets      
from .models import Car                 


class CarView(viewsets.ModelViewSet):  
    serializer_class = CarSerializer   
    queryset = Car.objects.all()