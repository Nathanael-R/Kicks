import { createContext, useState } from "react";
import { getProducts } from "../products/product";

export const CartContext = createContext({
  list: [],
  getItemAmount: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  removeItemFromCart: () => {},
  cartTotal: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getItemAmount(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    } else {
      return quantity;
    }
  }

  function addToCart(id) {
    const quantity = getItemAmount(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }
  function removeFromCart(id) {
    const quantity = getItemAmount(id);

    if (quantity == 1) {
      removeItemFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function removeItemFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function cartTotal() {
    let totalCost = 0;
    cartProducts.map((item) => {
      const productData = getProducts(item.id);
      totalCost += productData.price * item.quantity;
    });
    return totalCost;
  }
  const contextValue = {
    list: cartProducts,
    getItemAmount,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    cartTotal,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
