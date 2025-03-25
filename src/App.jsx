import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-amber-50 font-sans text-amber-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
