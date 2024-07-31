"use client";
import Head from "next/head";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HotSearches from "./components/HotSearches";
import Footer from "./components/Footer";
import SuccessMessage from "./components/SuccessMessage";
import ItemList from "./components/ItemList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./interface/item";
import { DJANGO_URL } from "./constant";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term
  const [rentedItem, setRentedItem] = useState<Item | null>(null); // State to track the rented item

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<Item[]>(DJANGO_URL("web/api/items/")); // Adjust the URL if needed
        setItems(response.data);
      } catch (err) {
        setError("Failed to fetch items.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Filter items based on the search term
  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const handleRent = async (item: Item) => {
    // Check if the item is available for rent
    if (item.quantity_available > 0) {
      // Create a copy of the item with updated quantity
      const updatedItem = {
        ...item,
        quantity_available: item.quantity_available - 1,
      };

      try {
        // Send PATCH request to update the item's ggiquantity_available
        const response = await fetch(
          DJANGO_URL(`web/api/items/${item.id}/rent/`),
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity_available: updatedItem.quantity_available,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to rent the item");
        }

        // Update the items state with the modified item
        setItems((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.id === item.id ? updatedItem : prevItem
          )
        );

        setRentedItem(updatedItem); // Set the rented item
      } catch (error) {
        console.error("Error renting item:", error);
      }
    } else {
      // Handle the case when the item is not available
      console.log("Item not available for rent.");
      // You can also show an alert or a toast notification here
    }
  };

  const handleLike = async (item: Item) => {
    try {
      const response = await fetch(
        DJANGO_URL(`web/api/items/${item.id}/favorite/`),
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_liked: !item.is_liked }), // Send the updated like state
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update like status");
      }

      const updatedItem = await response.json();

      // Update the local items state with the updated item
      const updatedItems = items.map((i) =>
        i.id === updatedItem.id ? updatedItem : i
      );
      setItems(updatedItems); // Update state with new items array
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="p-4">
        <SearchBar setSearchTerm={setSearchTerm} />{" "}
        {/* Pass setSearchTerm to SearchBar */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Latest Rentable Items</h2>
            {!loading && (
              <ItemList
                items={filteredItems}
                loading={loading}
                onRent={handleRent}
                onLike={handleLike}
              />
            )}
            {/* Pass filtered items to ItemList */}
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-2">Hot Searches</h2>
            <HotSearches />
          </div> */}
        </div>
      </div>
      {rentedItem && (
        <SuccessMessage
          message={`You have rented: ${rentedItem.name}`}
          onClose={() => {
            setRentedItem(null);
          }} // Close the message
        />
      )}
    </div>
  );
};

export default Home;
