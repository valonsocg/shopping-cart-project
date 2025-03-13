function App() {
  return (
    <div className="">
      <header>
        <div className="flex justify-between items-center p-4 bg-gray-400 text-white font-bold gap-6">
          <h1>Riplebella</h1>
          <h2>Menu</h2>
          <input
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
        <div>
          <div>
            <h2>Men's Cloth</h2>
            <h1>Arman Jacket</h1>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src="" alt="" />
            <h2>Amazing Discounts!</h2>
          </div>
          <div>
            <img src="" alt="" />
            <button>Collection</button>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src="" alt="" />
            <h2>jacket</h2>
            <p>description</p>
          </div>
          <div>
            <img src="" alt="" />
            <h2>jacket</h2>
            <p>description</p>
          </div>
          <div>
            <img src="" alt="" />
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
      <footer>
        <div>
          <p>company</p>
          <p>company</p>
          <p>company</p>
          <p>company</p>
        </div>

        <div>
          <p>company</p>
          <p>company</p>
          <p>company</p>
          <p>company</p>
        </div>

        <div>
          <p>company</p>
          <p>company</p>
          <p>company</p>
          <p>company</p>
        </div>

        <div>
          <h2>Ask </h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
