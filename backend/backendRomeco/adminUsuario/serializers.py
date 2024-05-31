from rest_framework import serializers
from .models import *

class LoginSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    contrasena = serializers.CharField(write_only=True)

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre','contraseña', 'mail', 'telefono', 'fechaNacimiento']


class PermisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permiso
        fields = '__all__'  # Incluye todos los campos del modelo Usuario

class Permiso_usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permiso_usuario
        fields = '__all__'  # Incluye todos los campos del modelo Usuario
