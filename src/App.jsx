function App() {
  return (
    <div className="font-sans">
      <header>
        <div className="flex items-center justify-between space-x-6 bg-amber-400 p-4 font-bold text-white">
          <h1>Riplebella</h1>
          <h2>Menu</h2>
          <input
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            type="text"
          />
          <h2>Sign in</h2>
          <button>Cart</button>
        </div>
        <div className="flex justify-between p-3">
          <h2>beauty</h2>
          <h2>fragrance</h2>
          <h2>men</h2>
          <h2>women</h2>
          <button>About Us</button>
        </div>
      </header>
      <main>
        <section className="flex">
          <div>
            <h2>Men's Cloth</h2>
            <h1>Arman Jacket</h1>
          </div>
          <div>
            <img
              src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_711314_al&qlt=85&exclusive=1&qlt=92&wid=320&hei=320&v=1&fmt=auto"
              alt="arman Jacket"
            />
            <div>
              <button>Shop Now</button>
            </div>
          </div>
        </section>

        <div className="flex">
          <div>
            <img
              src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1706809519/770426_ZAHT5_2580_005_100_0000_Light-Camisa-de-lona-maxi-GG.jpg"
              alt="gucci t shirt"
            />
            <h2>Amazing Discounts!</h2>
          </div>
          <div>
            <img
              src="https://ardoreyewear.co.uk/cdn/shop/articles/6-reasons-why-prada-frames-are-worth-it-929359_93d64083-d995-4e4a-b25c-e166e900ec3d.jpg?v=1740065480"
              alt="prada glasses"
            />
            <button>Collection</button>
          </div>
        </div>

        <div className="flex">
          <div>
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
            />
            <h2>jacket</h2>
            <p>description</p>
          </div>
          <div>
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
            />
            <h2>jacket</h2>
            <p>description</p>
          </div>
          <div>
            <img
              src="https://www.lacoste.ae/on/demandware.static/-/Sites-lacoste-uae-navigation-catalog/default/dw8a0256e1/plp-header-unisex-tshirts-fw24.jpg"
              alt="t shirts"
            />
            <h2>jacket</h2>
            <p>description</p>
          </div>
        </div>

        <div className="flex">
          <h2>Be part of Riplebella</h2>
          <p>10% Discount</p>
          <button>Subscribe</button>
        </div>
      </main>

      <footer className="grid grid-cols-4 grid-rows-4 place-items-center gap-4">
        <div className="col-start-3 row-start-1">company</div>
        <div className="col-start-2 row-start-1">company</div>
        <div className="col-start-1 row-start-2">company</div>
        <div className="col-start-1 row-start-3">company</div>
        <div className="col-start-1 row-start-4">company</div>
        <div className="col-start-2 row-start-4">company</div>
        <div className="col-start-2 row-start-3">company</div>
        <div className="col-start-2 row-start-2">company</div>
        <div className="col-start-3 row-start-2">company</div>
        <div className="col-start-3 row-start-3">company</div>
        <div className="col-start-3 row-start-4">company</div>
        <div className="col-start-1 row-start-1">company</div>
        <div className="col-start-4 row-span-2 row-start-1">
          Ask a specialist
        </div>
        <div className="col-start-4 row-span-2 row-start-3">
          <div className="flex gap-2">
            <button>phone</button>
            <button>mail</button>
            <button>chat</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
