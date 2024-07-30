"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../interface/item";

interface ItemListProps {
  items: Item[];
  loading: boolean;
  error: string | null;
}
const ItemList: React.FC<ItemListProps> = ({ items, loading, error }) => {
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
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
          className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded mb-2"
            />
          )}
          <h3 className="text-lg font-bold text-white">{item.name}</h3>
          <p className="text-gray-300">{item.description}</p>
          <p className="text-sm text-gray-400">Category: {item.category}</p>
          <div className="mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
