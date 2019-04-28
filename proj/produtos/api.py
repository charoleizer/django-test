from produtos.models import Produto
from rest_framework import viewsets, permissions
from .serializers import ProdutoSerializer

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProdutoSerializer