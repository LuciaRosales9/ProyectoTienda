# Generated by Django 5.0.4 on 2024-05-31 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminUsuario', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='contrasena',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='mail',
            field=models.EmailField(max_length=50),
        ),
    ]
