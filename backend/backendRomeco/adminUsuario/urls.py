from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.UsuarioListCreate.as_view(), name='usuario-list-create'),
    path('usuarios/<int:pk>/', views.UsuarioRetrieveUpdateDestroy.as_view(), name='usuario-retrieve-update-destroy'),
    path('login/', views.login_view, name='login'),  # Importando login_view desde el módulo views
]