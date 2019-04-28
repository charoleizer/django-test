from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
        ('products', '0002_produto_datahora'),
    ]

    operations = [
        migrations.RenameField("Product", "nome", "name"),   
        migrations.RenameField("Product", "preco", "price"),   
        migrations.RenameField("Product", "descricao", "description"),   
        migrations.RenameField("Product", "datahora", "created_at"),   
        migrations.RenameModel("Produto", "Product"),
    ]
