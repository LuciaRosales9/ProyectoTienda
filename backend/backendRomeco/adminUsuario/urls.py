from django.urls import path
from adminUsuario.views import *

urlpatterns = [
    # Definimos la ruta para la vista de inicio de sesión
    path('login/', LoginView.as_view(), name='login'),
    # Definimos la ruta para la vista de creación de usuario
    path('crear_usuario/', CrearUsuarioView.as_view(), name='crear_usuario'),
]