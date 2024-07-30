from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer

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