const SearchBar = () => {
  return (
    <div className="flex justify-center my-16">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-lg w-full max-w-xs "
      />
      <input type="submit" className="btn btn-info mt-1.5 ml-1" value="Search" />
    </div>
  );
};

export default SearchBar;
