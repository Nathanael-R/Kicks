import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Context/CartContext";
import { productList } from "../products/product";

const Catalogue = () => {
  const cart = useContext(CartContext);
  const notif = () => {
    return toast.success("Added to Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return <section className="min-h-[100vh] px-[15%] py-16 hidden"></section>;
};

export default Catalogue;
