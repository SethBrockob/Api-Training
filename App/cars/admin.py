from django.contrib import admin
from .models import Car

# Register your models here.

class CarAdmin(admin.ModelAdmin):
    lst = ("model","engine","description","specs")

admin.site.register(Car, CarAdmin)