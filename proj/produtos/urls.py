from rest_framework import routers
from django.urls import path
from .api import ProdutoViewSet

router = routers.DefaultRouter()

urlpatterns = router.urls