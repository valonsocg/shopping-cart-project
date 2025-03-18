import { useState } from "react";
import cart from "../assets/Cart.svg";
import searchIcon from "../assets/search.svg";
function ListingFilter({ onChange }) {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    onChange(search);
  }

  return (
    <div className="flex flex-wrap place-content-center items-center space-x-4">
      <div className="flex items-center justify-center gap-2">
        <input
          className="my-2 rounded-md border px-3 py-1 focus:ring-1 focus:ring-amber-200 focus:outline-none"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

        <img
          src={searchIcon}
          alt="search icon"
          className="size-6 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="cursor-pointer rounded-md bg-amber-800 px-4 py-1 font-semibold text-amber-50 hover:bg-amber-700">
          Log in
        </button>
        <button className="flex cursor-pointer items-center gap-1.5 rounded-md border px-4 py-1 font-semibold hover:bg-amber-800 hover:text-amber-50">
          Cart
          <img src={cart} alt="shopping cart" className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default ListingFilter;
