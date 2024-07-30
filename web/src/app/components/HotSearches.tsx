const HotSearches = () => {
  // Replace this with your data fetching logic
  const searches = Array(20)
    .fill(0)
    .map((_, index) => ({
      id: index + 1,
      term: `Search Term ${index + 1}`,
    }));

  return (
    <div>
      {searches.map((search) => (
        <div key={search.id} className="p-2 bg-gray-800 rounded mb-2">
          {search.term}
        </div>
      ))}
    </div>
  );
};

export default HotSearches;
