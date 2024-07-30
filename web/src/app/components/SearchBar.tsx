import React from "react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="p-4 rounded">
      <input
        type="text"
        placeholder="Search items..."
        className="w-full p-2 rounded bg-gray-700 text-white"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
