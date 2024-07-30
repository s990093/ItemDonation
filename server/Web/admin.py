from django.contrib import admin
from .models import *

@admin.register(Item)
class ScriptAdmin(admin.ModelAdmin):
    pass
    
