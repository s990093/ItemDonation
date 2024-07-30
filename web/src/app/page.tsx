"use client";
import Head from "next/head";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HotSearches from "./components/HotSearches";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./interface/item";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<Item[]>(
          "http://localhost:8000/web/api/items/"
        ); // Adjust the URL if needed
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
    console.log(item);
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="p-4">
        <SearchBar setSearchTerm={setSearchTerm} />{" "}
        {/* Pass setSearchTerm to SearchBar */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Latest Rentable Items</h2>
            <ItemList items={filteredItems} />{" "}
            {/* Pass filtered items to ItemList */}
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-2">Hot Searches</h2>
            <HotSearches />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
