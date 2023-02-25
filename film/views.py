from .models import Frame, MyPhotoFrame
from .serializers import MyFrameSerializer, MyPhotoFrameSerializer
from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView
from django.http import FileResponse
from rest_framework.parsers import MultiPartParser, FormParser
import string, random


class MyFrameViewSet(viewsets.ModelViewSet):
	queryset = Frame.objects.all()
	serializer_class = MyFrameSerializer
	parser_classes = (MultiPartParser, FormParser)

	def perform_create(self, serializer):
		serializer.save()

class MyPhotoFrameViewSet(viewsets.ModelViewSet):
	queryset = MyPhotoFrame.objects.all()
	serializer_class = MyPhotoFrameSerializer

	def perform_create(self, serializer):
		serializer.save()


