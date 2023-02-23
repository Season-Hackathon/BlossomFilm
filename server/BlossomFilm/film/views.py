from .models import Frame, Film
from .serializers import MyFrameSerializer, MyFilmSerializer
from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView
from django.http import FileResponse
from rest_framework.parsers import MultiPartParser, FormParser


class MyFrameViewSet(viewsets.ModelViewSet):
	queryset = Frame.objects.all()
	serializer_class = MyFrameSerializer
	parser_classes = (MultiPartParser, FormParser)

	def perform_create(self, serializer):
		serializer.save()

class MyFilmViewSet(viewsets.ModelViewSet):
	queryset = Film.objects.all()
	serializer_class = MyFilmSerializer

	def perform_create(self, serializer):
		serializer.save()


