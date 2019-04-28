from rest_framework import routers
from django.urls import path
from .views import home
from .api import ProdutoViewSet

router = routers.DefaultRouter()
router.register('api/produtos', ProdutoViewSet, 'produtos')

urlpatterns = router.urls