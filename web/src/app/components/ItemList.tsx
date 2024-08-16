"use client";
import React from "react";
import { FaDollarSign, FaShoppingCart, FaHeart } from "react-icons/fa"; // Import heart icon
import { Item } from "../interface/item";

interface ItemListProps {
  items: Item[];
  loading?: boolean;
  error?: string | null;
  onRent?: (item: Item) => void; // Callback function type definition
  onLike?: (item: Item) => void; // Callback function for toggling like
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  loading,
  error,
  onRent,
  onLike,
}) => {
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative"
        >
          <button
            className="absolute top-4 right-4 text-red-500 p-2" // Added padding
            onClick={onRent ? () => onRent(item) : undefined}
          >
            <FaHeart
              className={`text-2xl ${
                item.is_liked ? "text-red-500" : "text-gray-500"
              }`}
            />
          </button>

          {item.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
          )}
          <h3 className="text-lg font-bold text-white">{item.name}</h3>
          <p className="text-gray-300">{item.description}</p>
          <p className="text-sm text-gray-400">Category: {item.category}</p>
          <div className="mt-2 flex items-center">
            <span className="text-lg text-white mr-2">
              <FaShoppingCart />
            </span>
            <span className="text-white">{item.quantity_available}</span>
          </div>
          <div className="mt-4">
            <button
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
              onClick={onRent ? () => onRent(item) : undefined}
            >
              <FaShoppingCart className="mr-2" />
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
