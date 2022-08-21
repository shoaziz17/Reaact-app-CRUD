import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { ProductContext } from "../utilities/productContext";

function Header() {
  const { cardGame } = useContext(ProductContext);
  return (
    <header className="shadow-lg rounded-lg my-4 p-4 w-full  max-w-6xl mx-auto flex items-center justify-between">
      <h1 className="text-indigo-500 font-semibold text-xl">Games</h1>
      <nav className="space-x-8 flex items-center">
        <Link
          className="text-lg text-gray-500 font-semibold hover:text-indigo-500"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-lg text-gray-500 font-semibold hover:text-indigo-500"
          to={"/gameadd"}
        >
          Add
        </Link>
        <Link
          className="text-lg text-gray-500 font-semibold hover:text-indigo-500"
          to={"/login"}
        >
          Login
        </Link>
        <Link to={"/store"}>
          <span class="relative top-4 left-4 z-50 inline-flex items-center justify-center px-2 py-[5px] mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cardGame.length}
          </span>
          <HiOutlineShoppingCart className="relative w-8 h-8" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
