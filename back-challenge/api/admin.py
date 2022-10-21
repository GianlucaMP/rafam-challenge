from django.contrib import admin
from .models import User, Lesson

# Register your models here.
# admin.site.register(Lesson)
admin.site.register(User)

@admin.register(Lesson)
class Lesson(admin.ModelAdmin):
    list_display = ['id', 'title']