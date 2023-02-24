from django.contrib import admin
from .models import Frame
from .models import Film, MyPhotoFrame

admin.site.register(Frame)
admin.site.register(Film)
admin.site.register(MyPhotoFrame)

# Register your models here.
