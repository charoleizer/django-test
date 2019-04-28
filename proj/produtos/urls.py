from django.urls import path
from .views import home, api

urlpatterns = [
    path('', home),
    path('api/', api),
]
