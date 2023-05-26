import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Context/CartContext";
import { productList } from "../products/product";
import blueShoe from "../assets/blueShoe.png";

const Catalogue = () => {
  const cart = useContext(CartContext);
  const notif = () => {
    return toast.success("Added to Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <section className="h-[100vh] px-56 flex flex-col snap-start">
      <h2 className="text-6xl">All Shoes</h2>
      <div className="w-[35rem] h-[22rem] bg-black flex flex-col p-4 justify-between">
        <div className="flex gap-4 items-end h-[15rem] relative">
          <p className="bg-red-700 p-1 w-fit text-sm font-bold text-white absolute top-2 left-2 rounded-lg">
            Venom
          </p>
          <img src={blueShoe} alt="" className="h-60 w-60 object-cover" />
          <div className="text-white flex flex-col h-full justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold">Venom Vapor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className="text-3xl font-semibold">$122</p>
            </div>
            <div className="flex gap-4">
              <img src={blueShoe} alt="" className="h-20 w-20 object-cover" />
              <img src={blueShoe} alt="" className="h-20 w-20 object-cover" />
              <img src={blueShoe} alt="" className="h-20 w-20 object-cover" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-white h-12 font-semibold w-[21rem]">
            Order Now
          </button>
          <button className="bg-white h-12 font-semibold w-[11rem]">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
