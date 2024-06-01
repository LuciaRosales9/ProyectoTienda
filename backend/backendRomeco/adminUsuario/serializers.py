from rest_framework import serializers
from .models import *

class LoginSerializer(serializers.Serializer):
    mail = serializers.EmailField()
    contrasena = serializers.CharField(write_only=True)

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre','contrasena', 'mail', 'telefono', 'fechaNacimiento']


class PermisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permiso
        fields = '__all__'  # Incluye todos los campos del modelo Usuario

class Permiso_usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permiso_usuario
        fields = '__all__'  # Incluye todos los campos del modelo Usuario
