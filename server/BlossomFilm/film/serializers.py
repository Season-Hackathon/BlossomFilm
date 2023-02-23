from rest_framework import serializers
from .models import Frame, Film

class MyFrameSerializer(serializers.ModelSerializer):
	class Meta:
		model = Frame
		fields = '__all__'

class MyFilmSerializer(serializers.ModelSerializer):
	class Meta:
		model = Film
		fields = '__all__'
