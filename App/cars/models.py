from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class CarManager(models.Manager):
    def create_car(self,model,engine,description,specs):
        return Car(model, engine, description, specs)


class Car(models.Model):
    model = models.CharField(max_length=20)
    engine = models.TextField()
    description = models.TextField()
    specs = models.TextField()

    objects = CarManager()

    def __str__(self):
        return str(self.model)