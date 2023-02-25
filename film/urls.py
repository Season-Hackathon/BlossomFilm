from django.urls import path, include
from rest_framework import routers
from . import views
from random import *

router = routers.SimpleRouter()
router.register('frames', views.MyFrameViewSet, basename='frame')

my_frame_router = routers.SimpleRouter(trailing_slash=False)
my_frame_router.register('my_frame', views.MyPhotoFrameViewSet, basename='my_frame')

urlpatterns = [
	path('', include(router.urls)),
    path('', include(my_frame_router.urls)),
    path('<int:frame_id>', include(my_frame_router.urls))
]
#urlpatterns += router.urls
