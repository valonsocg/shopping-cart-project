import ListingCard from "./ListingCard";

function ListingLists({ listings }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-8 p-4">
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
