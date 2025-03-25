import { useState, useEffect } from "react";
import ListingLists from "../components/ListingLists";

function ProductsPage() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    async function fetchListing() {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const resData = await response.json();
        setListings(resData);
        setAllListings(resData);
      } catch {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }

    fetchListing();
  }, []);

  //   function handleFilter(search) {
  //     let filteredListings = allListings;
  //     if (search) {
  //       filteredListings = filteredListings.filter((listing) =>
  //         listing.title.toLowerCase().includes(search.toLowerCase()),
  //       );
  //     }
  //     setListings(filteredListings);
  //   }

  function renderListings() {
    if (isLoading) {
      return (
        <div className="text-center font-semibold">
          <p>Loading products...</p>
        </div>
      );
    }

    if (error) {
      return <div className="text-center font-semibold">{error}</div>;
    }
    return <ListingLists listings={listings} />;
  }
  return <>{renderListings()}</>;
}

export default ProductsPage;
