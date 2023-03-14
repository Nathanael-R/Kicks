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
  return (
    <section className="min-h-[100vh] px-[15%] py-16">
      <h2 className="text-6xl mb-10">All Shoes</h2>
      <div className="flex flex-wrap gap-8">
        {productList.map((item, key) => (
          <div className="mb-6 relative" key={item.id}>
            <img
              src={item?.image}
              alt="redShoe2"
              border="0"
              srcset=""
              className="border-2 border-gray-300 dark:border-zinc-500"
            />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-xl">{item.desc}</p>
            <p className="font-bold text-2xl">${item.price}</p>
            <FaShoppingBasket
              className="absolute top-3 right-3"
              color="gray"
              size={30}
              cursor="pointer"
              onClick={() => {
                cart.addToCart(item.id);
                notif();
              }}
            />
            <ToastContainer />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogue;
