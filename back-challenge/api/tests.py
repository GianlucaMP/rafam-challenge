from django.urls import resolve, reverse
from rest_framework import status
from rest_framework.test import APITestCase
# from myproject.apps.core.models import Account
from .models import User, Lesson

class UrlsTest(APITestCase):
    
    @classmethod
    def setUpTestData(self):
        users_list = [
            {"username": 'lucas',"email":'l@l.com',"password":'lucas'},
            {"username": 'mateo',"email":'mat@mat.com',"password":'mateo'},
            {"username": 'marcos',"email":'mar@mar.com',"password":'marcos'},
        ]

        self.users = [
                User.objects.create_user(u['username'], u['email'], u['password'])
                for u in users_list
            ]

        # lucas's friends
        self.users[0].friends.add(self.users[1])
        self.users[0].friends.add(self.users[2])
        self.users[1].friends.add(self.users[0])
        self.users[2].friends.add(self.users[0])
        # mateo's friends
        self.users[1].friends.add(self.users[2])
        # marcos's friends
        self.users[2].friends.add(self.users[1])

        '''Lessons'''
        lessons_list = [
            {"title": 'Mate 1',"description":'mix de todo',"topic": str(Lesson.Topics.MATH)},
            {"title": 'Mate 2',"description":'funciones y derivadas',"topic":str(Lesson.Topics.MATH)},
            {"title": 'Inge 1',"description":'Se aprende mucho',"topic":str(Lesson.Topics.SCIENCE)},
        ]

        self.lessons = [
                Lesson.objects.create(title=l['title'],description=l['description'], topic=l['topic'])
                for l in lessons_list
            ]

        #lucas's lessons
        self.users[0].taken_lessons.add(self.lessons[0])
        self.users[0].taken_lessons.add(self.lessons[1])
        #mateo's lessons
        self.users[1].taken_lessons.add(self.lessons[2])
        #marcos's lessons
        self.users[2].taken_lessons.add(self.lessons[2])     

    def setUp(self):
        # This method is run before each test.
        # print('setUp')
        pass

    def tearDown(self):
        # This method is run after each test.
        # print('tearDown')
        pass

    def test_list_users(self):
        """
        Test to verify api:list_users route
        """
        url = reverse("api:list_users")
        response = self.client.get(url)
        print('test_list_users: ',response.json())
        self.assertEqual(200, response.status_code)

    def test_get_user(self):
        """
        Test to verify api:get_user route
        """
        url = reverse("api:get_user", kwargs={'username':'lucas'})
        response = self.client.get(url)
        print('test_get_user: ',response.json())
        self.assertEqual(200, response.status_code)

    def test_user_friendships(self):
        """
        Test to verify api:user_friendships route
        """
        url = reverse("api:user_friendships", kwargs={'username':'lucas'})
        response = self.client.get(url)
        print('test_user_friendships: ', "lucas's friends -> ", response.json())
        self.assertEqual(200, response.status_code)

    def test_taken_lessons(self):
        """
        Test to verify api:user_lessons route
        """
        url = reverse("api:user_lessons", kwargs={'username':'lucas'})
        response = self.client.get(url)
        print('test_taken_lessons:', response.json())
        self.assertEqual(200, response.status_code)
        
    def test_list_friendships(self):
        """
        Test to verify api:list_friendships route
        """
        url = reverse("api:list_friendships")
        response = self.client.get(url)
        print('test_list_friendships: ', "all friendships -> ", response.json())
        self.assertEqual(200, response.status_code)

    def test_list_lessons(self):
        """
        Test to verify api:list_lessons route
        """
        url = reverse("api:list_lessons")
        response = self.client.get(url)
        print('test_list_lessons:', "all friendships -> ", response.json())
        self.assertEqual(200, response.status_code)
        
    