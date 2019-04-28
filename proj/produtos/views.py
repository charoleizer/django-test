from django.http import JsonResponse
from django.shortcuts import render
from .models import Produto

def home(request):
    produtos = Produto.objects.all()
    return render(request, 'produtos.html', {'produtos': produtos})

def api(request):
    produtos = list()
    for produto in Produto.objects.all():
        produtos.append({
            'nome': produto.nome, 
            'preco': produto.preco,  
            'descricao': produto.descricao, 
            'datahora': produto.datahora, 
        })
    return JsonResponse({'produtos': produtos})