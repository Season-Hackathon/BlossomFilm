
from django.utils import timezone
from django.db import models
from uuid import uuid4
import os

def upload_to_func(instance, filename):
	prefix = timezone.now().strftime("%Y/%m/%d")
	ext = filename.split('.')[-1]
	filename = f'{uuid4()}.{ext}'
	return os.path.join(f'frame/{prefix}/', filename)

class Frame(models.Model):
	frame_image = models.ImageField(upload_to=upload_to_func)
	def __str__(self):
		return f'{self.pk}'
