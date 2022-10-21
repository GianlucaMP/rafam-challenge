from email.policy import default
from pickle import NONE
from random import choices
from statistics import mode
from tokenize import blank_re
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.
class User(AbstractUser):
    friends = models.ManyToManyField("User", blank=True)
    taken_lessons = models.ManyToManyField("Lesson", blank=True)

class Lesson(models.Model):
    class Topics(models.TextChoices):
        MATH = 'MT', _('Math')
        SPANISH = 'SPA', _('Spanish')
        SPORTS = 'SPR', _('Sports')
        ARTS = 'AR', _('Arts')
        SCIENCE = 'SC', _('Science')
        NONE = 'NN', _('Non Specific Topi')

    title = models.CharField(max_length=50)
    description = models.CharField(max_length=120)
    topic = models.CharField(max_length=20, choices=Topics.choices, default=Topics.NONE)

    def __str__(self):
        return self.title