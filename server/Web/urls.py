from django.urls import path

app_name = "Web"
from django.urls import path

from .views import *

urlpatterns = [
    path('items/create/', ItemCreateView.as_view(), name='item-create'),
    path('items/', ItemListCreateView.as_view(), name='item-list-create'),
    path('fa-items/', ItemListFACreateView.as_view(), name='item-list-create'),
    path('items/<int:pk>/favorite/', ItemFavoriteView.as_view(), name='item-favorite'),  # For updating favorite status
    path('items/<int:pk>/rent/', ItemRentView.as_view(), name='item-rent'),  # For renting an item
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('login/', login_view, name='login'),
]
