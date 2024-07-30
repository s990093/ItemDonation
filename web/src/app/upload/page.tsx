"use client";
import React, { useState } from "react";
import { DJANGO_URL } from "../constant";

const ItemUploadForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [quantityAvailable, setQuantityAvailable] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("is_liked", JSON.stringify(isLiked));
    if (image) formData.append("image", image);
    formData.append("quantity_available", quantityAvailable.toString());

    try {
      const response = await fetch(DJANGO_URL("web/api/items/create/"), {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to upload item");
      }

      // Handle successful upload (e.g., clear the form, show a success message, etc.)
    } catch (error) {
      console.error("Error uploading item:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-white">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white">Liked:</label>
        <input
          type="checkbox"
          checked={isLiked}
          onChange={(e) => setIsLiked(e.target.checked)}
          className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white">Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white">Quantity Available:</label>
        <input
          type="number"
          value={quantityAvailable}
          onChange={(e) => setQuantityAvailable(parseInt(e.target.value))}
          className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Upload Item
      </button>
    </form>
  );
};

export default ItemUploadForm;
