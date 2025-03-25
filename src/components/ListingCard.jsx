function ListingCard({ listing }) {
  return (
    <div className="mb-6 flex w-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      <img
        src={listing.image}
        alt={listing.title}
        className="h-90 w-full object-contain"
      />
      <div className="flex h-[120px] flex-col items-center justify-center space-y-4 bg-amber-100 p-5 pt-2">
        <h2 className="mb-0 w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
          {listing.title}
        </h2>
        <p className="font-semibold">${listing.price}</p>
        <div className="border-amber-900">
          <input
            className="w-12 rounded-sm bg-amber-50 text-center"
            type="number"
            value={1}
          />
          <button className="cursor-pointer rounded-md bg-amber-800 px-2 font-semibold text-amber-50 hover:bg-amber-700">
            +
          </button>
          <button className="cursor-pointer rounded-md bg-amber-800 px-2 font-semibold text-amber-50 hover:bg-amber-700">
            -
          </button>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
