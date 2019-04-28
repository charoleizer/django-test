import arrow
from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=7, decimal_places=2)
    descricao = models.TextField()
    datahora = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome

    @property
    def time_ago(self):
        time_ago = arrow.get(self.datahora)
        return time_ago.humanize(locale='pt')
