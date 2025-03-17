import cart from "./assets/Cart.svg";

function App() {
  return (
    <div className="bg-amber-50 font-sans text-amber-950">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:justify-between">
          <h1 className="cursor-pointer text-center font-serif font-bold">
            Riplebella
          </h1>
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
          <div className="flex flex-wrap place-content-center items-center space-x-4">
            <input
              className="my-2 rounded-md border px-3 py-1 focus:ring-1 focus:ring-amber-200 focus:outline-none"
              type="text"
              placeholder="Search"
            />
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
        </div>
      </header>

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

      <footer className="mt-12 bg-amber-950 py-12 text-amber-50">
        <div className="container mx-auto grid gap-6 text-center md:grid-cols-4">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Ask a Specialist</h3>
            <div className="mx-auto mt-4 grid max-w-md grid-cols-3 gap-4">
              <button className="flex w-20 cursor-pointer flex-col items-center justify-center rounded-md bg-amber-800 px-4 py-2 font-semibold hover:bg-amber-700">
                Phone
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/animatedicons-d158d.appspot.com/o/minimalistic%2FCalling%20V3.svg?alt=media&token=6b114f39-15c2-4f20-879b-2eb58e13924a"
                  alt="phone"
                  className="mt-2 size-10"
                />
              </button>
              <button className="flex w-20 cursor-pointer flex-col items-center justify-center rounded-md bg-amber-800 px-4 py-2 font-semibold hover:bg-amber-700">
                Mail
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/animatedicons-d158d.appspot.com/o/minimalistic%2FMail%20V3.svg?alt=media&token=1c5a18d0-63e5-4d10-b136-4b220a6a8f3e"
                  alt="mail"
                  className="mt-2 size-10"
                />
              </button>
              <button className="flex w-20 cursor-pointer flex-col items-center justify-center rounded-md bg-amber-800 px-4 py-2 font-semibold hover:bg-amber-700">
                Chat
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/animatedicons-d158d.appspot.com/o/minimalistic%2FChat%20V6.svg?alt=media&token=3b5ac7ef-b8f3-4860-bce5-765609642ea9"
                  alt="chat"
                  className="mt-2 size-10"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
