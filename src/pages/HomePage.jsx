import ListingFilter from "../components/ListingFilter";
import ListingLists from "../components/ListingLists";

import Header from "../components/Header";

function HomePage() {
  return (
    <div>
      <main className="container mx-auto p-6">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="mx-auto">
            <h2 className="font-semibold">Men's Cloth</h2>
            <h1 className="font-bold">Arman Jacket</h1>
          </div>
          <div className="flex items-end space-x-4">
            <img
              src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_711314_al&qlt=85&exclusive=1&qlt=92&wid=320&hei=320&v=1&fmt=auto"
              alt="arman Jacket"
              className="h-auto w-full max-w-4xl rounded-lg object-cover shadow-lg"
            />
            <button className="mt-4 cursor-pointer rounded-md bg-amber-800 px-6 py-2 font-semibold text-nowrap text-amber-50 hover:bg-amber-700">
              Shop Now
            </button>
          </div>
        </section>

        <section className="mt-12 grid items-center gap-6 md:grid-cols-2">
          <div className="text-center">
            <img
              src="https://ardoreyewear.co.uk/cdn/shop/articles/6-reasons-why-prada-frames-are-worth-it-929359_93d64083-d995-4e4a-b25c-e166e900ec3d.jpg?v=1740065480"
              alt="prada glasses"
              className="rounded-lg shadow-lg"
            />
            <button className="mt-2 cursor-pointer rounded-md bg-amber-800 px-6 py-2 font-semibold text-amber-50 hover:bg-amber-700">
              Collection
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1706809519/770426_ZAHT5_2580_005_100_0000_Light-Camisa-de-lona-maxi-GG.jpg"
              alt="gucci t shirt"
              className="rounded-lg shadow-lg"
            />
            <h2 className="mt-2 font-semibold">Amazing Discounts!</h2>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
              className="rounded-lg shadow-lg"
            />
            <h2 className="mt-2 font-semibold">Jacket</h2>
            <p className="text-amber-600">Description</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
              className="rounded-lg shadow-lg"
            />
            <h2 className="mt-2 font-semibold">Jacket</h2>
            <p className="text-amber-600">Description</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
              className="rounded-lg shadow-lg"
            />
            <h2 className="mt-2 font-semibold">Jacket</h2>
            <p className="text-amber-600">Description</p>
          </div>
        </section>

        <section className="mt-12 rounded-md bg-amber-200 py-6 text-center">
          <h2 className="">Be part of Riplebella</h2>
          <p>10% Discount</p>
          <button className="mt-4 cursor-pointer rounded-md bg-amber-800 px-4 py-2 font-semibold text-amber-50 hover:bg-amber-700">
            Subscribe
          </button>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
