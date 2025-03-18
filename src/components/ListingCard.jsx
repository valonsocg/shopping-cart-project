function ListingCard({ listing }) {
  return (
    <div>
      <img src={listing.image} alt={listing.name} />
      <div>
        <h2>{listing.name}</h2>
      </div>
    </div>
  );
}

export default ListingCard;
