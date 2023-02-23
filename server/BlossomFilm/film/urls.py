from django.urls import path, include
from rest_framework import routers
from . import views
from random import *

router = routers.SimpleRouter()
router.register('frames', views.MyFrameViewSet, basename='frame')


film_router = routers.SimpleRouter(trailing_slash=False)
film_router.register('film', views.MyFilmViewSet, basename='film')

urlpatterns = [
	path('', include(router.urls)),
    path('', include(film_router.urls)),
]

#urlpatterns += router.urls
