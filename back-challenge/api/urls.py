from collections import UserList
from django.urls import path, include

# Django REST Framework
from rest_framework.urlpatterns import format_suffix_patterns


# Views
from .views import *

app_name = 'api'

urlpatterns = [
    # path('send_friend_request/<int:userID>/', name='send friend request'),
    # path('accept_friend_request/<int:userID>/', name='accept friend request'),
    path('users/', ListUsers.as_view(), name='list_users'),
    path('users/<str:username>/', getUser.as_view(), name='get_user'),
    path('user-friendships/<str:username>/', getUserFriends.as_view(), name='user_friendships'),
    path('user-lessons/<str:username>/', getUserTakenLessons.as_view(), name='user_lessons'),
    path('friendships/', ListAllFrienships.as_view(), name='list_friendships'),    
    path('lessons/', ListLessons.as_view(), name='list_lessons'),   
    path('weather/', getWeatherApi.as_view(), name='weather') 
]