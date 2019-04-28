from rest_framework import routers
from django.urls import path
from .api import ProductViewSet

router = routers.DefaultRouter()

urlpatterns = router.urls