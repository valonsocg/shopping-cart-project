import { Link } from "react-router-dom";
import ListingFilter from "./ListingFilter";

function Header({ handleFilter }) {
  return (
    <header className="sticky top-0 bg-white shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:justify-between">
        <Link to={"/"}>
          <h1 className="cursor-pointer text-center font-serif font-bold">
            Riplebella
          </h1>
        </Link>
        <Link to={"/products"}>
          <nav className="hidden space-x-6 lg:flex">
            <a href="#beauty" className="hover:text-amber-700">
              Beauty
            </a>
            <a href="#fragrance" className="hover:text-amber-700">
              Fragrance
            </a>
            <a href="#men" className="hover:text-amber-700">
              Men
            </a>
            <a href="#women" className="hover:text-amber-700">
              Women
            </a>
          </nav>
        </Link>
        <ListingFilter onChange={handleFilter} />
      </div>
    </header>
  );
}

export default Header;
