export interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  is_liked: boolean;
  image: string; // Update this based on your image field in the Django model
  quantity_available: number; // Quantity available for rent
}
