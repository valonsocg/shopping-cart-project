function Footer() {
  return (
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
  );
}

export default Footer;
