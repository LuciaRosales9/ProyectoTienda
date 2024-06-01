from django.db import models
from django.core.exceptions import ValidationError
import datetime
from django.contrib.auth.hashers import make_password, check_password

class Permiso(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    def __str__ (self):
        return self.nombre
    class Meta:
        verbose_name_plural = "Permisos"
        app_label = 'adminUsuario'
    def clean(self):
        if not self.nombre:
            raise ValidationError("El campo 'nombre' no puede estar vacío.")
        


class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=128)
    mail = models.EmailField(max_length=50) 
    telefono = models.DecimalField(max_digits=10, decimal_places=0)
    fechaNacimiento = models.DateField()
    def __str__ (self):
        return self.nombre
    class Meta:
        verbose_name_plural = "Usuarios"
        app_label = 'adminUsuario'
    def clean(self):
        if not self.nombre:
            raise ValidationError("El campo 'Nombre' no puede estar vacío.")
        if not self.contrasena:
            raise ValidationError("El campo 'Contraseña' no puede estar vacío.")
        if not self.mail:
            raise ValidationError("El campo 'Mail' no puede estar vacío.")
        if self.telefono < 0:
            raise ValidationError("El número de teléfono no puede ser negativo.")
        if not self.telefono:
            raise ValidationError("El campo 'Teléfono' no puede estar vacío.")
    def save(self, *args, **kwargs):
        self.contrasena = make_password(self.contrasena)
        super().save(*args, **kwargs)
        

class Permiso_usuario(models.Model):
    permiso = models.ForeignKey(Permiso, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__ (self):
        return "Permisos del usuario"
    class Meta:
        verbose_name_plural = "Permisos por usuarios"
        app_label = 'adminUsuario'
# Create your models here.
