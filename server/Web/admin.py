from django.contrib import admin
from django.utils.html import format_html
from .models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name' , 'category', 'is_liked', 'quantity_available', 'display_image')  # Customize this list as needed
    search_fields = ('name', )  # Optional: add search functionality
    list_filter = ('category', 'is_liked')  # Optional: add filter functionality

    def display_image(self, obj):
        if obj.image:  # Ensure the image field is not empty
            return format_html('<img src="{}" style="width: 50px; height: auto;" />', obj.image.url)  # Adjust the width as needed
        return "No Image"
    
    display_image.short_description = 'Image'  # Set the column header in the admin interface
