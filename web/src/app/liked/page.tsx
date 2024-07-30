"use client";
import ItemList from "../components/ItemList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./interface/item";

const LikedItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<Item[]>(
          "http://localhost:8000/web/api/fa-items/"
        ); // Adjust the URL if needed
        setItems(response.data);
      } catch (err) {
        setError("Failed to fetch items.");
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liked Items</h1>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No liked items found.</p>
      )}
    </div>
  );
};

export default LikedItems;
