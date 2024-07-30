// Fashion.tsx
import React from "react";

const Fashion: React.FC = () => {
  const fashionItems = []; // Replace with your state management to fetch fashion items

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fashion Items</h1>
      {fashionItems.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fashionItems.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              {/* Add other item details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No fashion items available.</p>
      )}
    </div>
  );
};

export default Fashion;
