from django.shortcuts import render
from rest_framework import generics
from .models import Usuario
from .serializers import UsuarioSerializer
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import Usuario
from .serializers import LoginSerializer, UsuarioSerializer

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            nombre = serializer.validated_data['nombre']
            contrasena = serializer.validated_data['contrasena']
            try:
                usuario = Usuario.objects.get(nombre=nombre)
            except Usuario.DoesNotExist:
                return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
            
            if check_password(contrasena, usuario.contrasena):
                usuario_serializer = UsuarioSerializer(usuario)
                return Response(usuario_serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# esta vista creará un nuevo usuario en la base de datos.
class CrearUsuarioView(APIView):
    def post(self, request):
        # Creamos un serializador usando los datos recibidos en la solicitud
        serializer = UsuarioSerializer(data=request.data)
        
        # Verificamos si los datos son válidos según las reglas definidas en el serializador
        if serializer.is_valid():
            # Si los datos son válidos, guardamos el nuevo usuario en la base de datos
            serializer.save()
            # Devolvemos una respuesta con los datos del usuario creado y un código de estado 201 (Created)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Si los datos no son válidos, devolvemos una respuesta con los errores encontrados y un código de estado 400 (Bad Request)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        