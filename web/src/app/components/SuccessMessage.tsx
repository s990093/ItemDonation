"use client";
import React, { useEffect } from "react";

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div className="fixed top-2 right-3 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 animate-fade-in-out">
      <h3 className="font-bold">Success!</h3>
      <p>{message}</p>
      <button
        className="mt-2 text-blue-300 hover:underline"
        onClick={onClose} // Close the message
      >
        Close
      </button>
    </div>
  );
};

export default SuccessMessage;
