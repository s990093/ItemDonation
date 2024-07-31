from django.db import models
from django.contrib.auth.models import AbstractUser

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50)
    is_liked = models.BooleanField(default=False)
    image = models.ImageField(upload_to='items/', blank=True, null=True)
    quantity_available = models.PositiveIntegerField(default=1)  # Quantity available for rent

    def __str__(self):
        return self.name


