import itertools
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from .models import User, Lesson
import requests     

from .serializers import *


# Django REST Framework
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView, status
from rest_framework.response import Response

class ListUsers(ListAPIView):
    '''View to list users'''
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

class ListAllFrienships(ListAPIView):
    '''View to list all the registered friendships in the system'''
    queryset = User.objects.all()
    serializer_class = UserModelFriendsSerializer
    

class getUser(RetrieveAPIView):
    '''View to get a user'''
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

class getUserFriends(RetrieveAPIView):
    '''View to list a user friends'''
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = UserModelFriendsSerializer

    def retrieve(self, request, *args, **kwargs):
        qs = User.objects.get(username=kwargs['username']).friends.all().values_list('username', flat=True)
        friends = {"friends": list(qs)}
        return Response(data=friends)

class getUserTakenLessons(RetrieveAPIView):
    '''View to list user taken lessons'''
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = UserModelTakenLessonsSerializer

class ListLessons(ListAPIView):
    '''View to list lessons'''
    queryset = Lesson.objects.all()
    serializer_class = LessonModelSerializer

class getLesson(RetrieveAPIView):
    '''View to get a user'''
    queryset = Lesson.objects.all()
    serializer_class = LessonModelSerializer

class getWeatherApi(APIView):
    def get(self, request, format=None):
        response = requests.get('https://api.open-meteo.com/v1/forecast?latitude=-34.92&longitude=-57.95&daily=temperature_2m_max,temperature_2m_min&timezone=auto')
        return Response(data=response.json(), status=response.status_code)