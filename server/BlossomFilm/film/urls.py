from django.urls import path, include
from rest_framework import routers
from . import views
from random import *

router = routers.SimpleRouter()
router.register('frames', views.MyFrameViewSet, basename='frame')


film_router = routers.SimpleRouter(trailing_slash=False)
film_router.register('film', views.MyFilmViewSet, basename='film')

my_frame_router = routers.SimpleRouter(trailing_slash=False)
my_frame_router.register('my_frame', views.MyPhotoFrameViewSet, basename='my_frame')
 
urlpatterns = [
	path('', include(router.urls)),
    path('', include(film_router.urls)),
    path('', include(my_frame_router.urls)),
    path('<int:frame_id>', include(my_frame_router.urls))
   # path('<int:frame_id>/<int:')
]

#urlpatterns += router.urls
