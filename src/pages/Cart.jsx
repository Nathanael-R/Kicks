import { CartContext } from "../Context/CartContext";
import Card from "../components/Card";
import { useContext } from "react";
const Cart = () => {
  const cart = useContext(CartContext);
  const productCount = cart.list.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const checkout = async () => {
    await fetch ('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json()
    }).then((response)=>{
        if(response.url){
          window.location.assign(response.url)
        }
    })
  }
  return (
    <section className="min-h-screen flex flex-col flex-wrap px-[15%] py-16 items-center justify-center gap-4">
      {productCount > 0 ? (
        <>
          <h2 className="text-2xl font-bold">Your cart Items:</h2>
          <div className="flex gap-4">
            {cart.list.map((currentProduct, index) => (
              <Card
                key={index}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              />
            ))}
          </div>
          <div className="flex">
            <h2 className="text-2xl font-semibold">Total:</h2>
            <p className="text-2xl font-bold ml-2">${cart.cartTotal().toFixed(2)}</p>
          </div>
          <button className="bg-blue-800 py-3 px-7 font-bold text-white rounded" onClick={checkout}>Checkout</button>
        </>
      ) : (
        <h2 className="text-3xl">Your Cart is currently empty</h2>
      )}
    </section>
  );
};

export default Cart;
