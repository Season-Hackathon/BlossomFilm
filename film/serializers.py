from rest_framework import serializers
from .models import Frame, MyPhotoFrame

class MyFrameSerializer(serializers.ModelSerializer):
	class Meta:
		model = Frame
		fields = '__all__'

class MyPhotoFrameSerializer(serializers.ModelSerializer):
	class Meta:
		model = MyPhotoFrame
		fields = '__all__'
