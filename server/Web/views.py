from django.contrib.auth import logout
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from rest_framework.views import APIView

from .models import *
from .serializers import *

class ItemListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
class ItemCreateView(generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemListFACreateView(generics.ListCreateAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.filter(is_liked=True)  # Return only items with is_liked=True
    
class ItemFavoriteView(generics.UpdateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def patch(self, request, *args, **kwargs):
        item = self.get_object()  # Get the item based on the URL parameter
        item.is_liked = not item.is_liked  # Toggle the is_liked status
        item.save()
        serializer = self.get_serializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ItemRentView(generics.UpdateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def patch(self, request, *args, **kwargs):
        item = self.get_object()  # Get the item based on the URL parameter
        new_quantity = request.data.get('quantity_available')

        if new_quantity is not None and new_quantity >= 0:
            item.quantity_available = new_quantity  # Update the item's quantity
            item.save()
            serializer = self.get_serializer(item)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid quantity."}, status=status.HTTP_400_BAD_REQUEST)
        
        
class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, "username": user.username}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, "username": user.username}, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "Successfully logged out."}, status=200)
