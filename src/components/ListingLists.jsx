import ListingCard from "./ListingCard";

function ListingLists({ listings }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <p>No listing found.</p>
      )}
    </div>
  );
}

export default ListingLists;
