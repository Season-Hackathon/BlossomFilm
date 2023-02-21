from .models import Frame
from .serializers import MyFrameSerializer
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
