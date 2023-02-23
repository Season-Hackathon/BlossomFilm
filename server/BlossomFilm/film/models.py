
from django.utils import timezone
from django.db import models
from uuid import uuid4
import os
import random

def upload_to_func(instance, filename):
	prefix = timezone.now().strftime("%Y/%m/%d")
	ext = filename.split('.')[-1]
	filename = f'{uuid4()}.{ext}'
	return os.path.join(f'frame/{prefix}/', filename)
	
class Film(models.Model):
	#벚꽃 필름안에 업로드할 사진들
	film1 = models.ImageField(upload_to='film_photo', default='', blank=True)
	film2 = models.ImageField(upload_to='film_photo', default='', blank=True)
	film3 = models.ImageField(upload_to='film_photo', default='', blank=True)
	film4 = models.ImageField(upload_to='film_photo', default='', blank=True)
	#프레임 배경 사진
	frame_background = models.ImageField(upload_to='frame_photo', default='', blank=True)

	#합성 완료된 벚꽃 필름 
class Frame(models.Model):
	frame_image = models.ImageField(upload_to=upload_to_func)
	title = models.CharField(max_length=512, default='', blank=True)
	#외래키
	film = models.OneToOneField(Film, on_delete=models.CASCADE)
	def __str__(self):
		return f'{self.pk}'



