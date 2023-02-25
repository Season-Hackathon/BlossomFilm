
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

class MyPhotoFrame(models.Model):
	#프레임 가로 세로 구분
	frame_id = models.AutoField(unique=True, primary_key=True)
	width = models.BooleanField(default=False, null=True)
	height = models.BooleanField(default=False, null=True)
	#프레임 배경 사진 
	frame_background = models.ImageField(upload_to='frame_photo', default='', blank=True)
	title = models.CharField(max_length=512, default='', blank=True)

	#합성 완료된 벚꽃 필름 
class Frame(models.Model):
	frame_image = models.ImageField(upload_to=upload_to_func)
	title = models.CharField(max_length=512, default='', blank=True)
	width = models.BooleanField(default=False, null=True)
	height = models.BooleanField(default=False, null=True)
	#외래키
	def __str__(self):
		return f'{self.pk}'



