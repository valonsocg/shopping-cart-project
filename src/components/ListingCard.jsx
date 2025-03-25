import cart from "../assets/Cart.svg";
function ListingCard({ listing }) {
  return (
    <div className="mb-6 flex w-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      <img
        src={listing.image}
        alt={listing.title}
        className="h-90 w-full object-contain"
      />
      <div className="flex h-[130px] flex-col items-center justify-between gap-2 bg-amber-100 p-5 pt-2">
        <h2 className="mb-0 w-full overflow-x-hidden text-center text-ellipsis whitespace-nowrap">
          {listing.title}
        </h2>
        <div className="flex space-x-6">
          <p className="font-semibold">${listing.price}</p>
          <div className="flex min-w-[100px] items-center justify-between gap-2 rounded-md bg-amber-50 text-sm">
            <button className="cursor-pointer rounded-md bg-amber-800 px-2 font-semibold text-amber-50 hover:bg-amber-700">
              -
            </button>
            <span>1</span>
            <button className="cursor-pointer rounded-md bg-amber-800 px-2 font-semibold text-amber-50 hover:bg-amber-700">
              +
            </button>
          </div>
        </div>
        <button className="flex cursor-pointer items-center gap-1.5 rounded-md bg-amber-800 px-4 py-1 font-semibold text-amber-50 hover:bg-amber-700">
          Buy
          <img src={cart} alt="shopping cart" className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default ListingCard;
