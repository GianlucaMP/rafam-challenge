
# Django REST Framework
from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

# Models
from .models import Lesson, User

class UserModelSerializer(serializers.ModelSerializer):
    '''User model serializer'''

    class Meta:
        '''Meta class'''
        model = User
        fields = ('username',)
        read_only_fields = ('id',)

class UserModelFriendsSerializer(serializers.ModelSerializer):
    '''User model friends serializer'''
    friends = UserModelSerializer(read_only=True, many=True)

    class Meta:
        '''Meta class'''
        model = User
        fields = ('username','friends',)
        # read_only_fields = ('id',)

class LessonModelSerializer(serializers.ModelSerializer):
    '''Lesson model serializer'''
    class Meta:
        model = Lesson
        # fields = '__all__'
        exclude = ['id']

class UserModelTakenLessonsSerializer(serializers.ModelSerializer):
    '''User model friends serializer'''
    taken_lessons = LessonModelSerializer(read_only=True, many=True)

    class Meta:
        '''Meta class'''
        model = User
        fields = ('taken_lessons',)
        # read_only_fields = ('id',)

# class AllFrienshipsSerializer(serializers.ModelSerializer):
