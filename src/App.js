import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OrderSummary from "./pages/OrderSummary";
import { useLocalStorageState } from "./pages/useLocalStorageState";

export default function App() {
  const [cart, setCart] = useLocalStorageState([], "cart");
  const cartQuantity = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );
  const netPrice = cart.reduce(
    (total, cartItem) => total + cartItem.price,
    0,
  );

  function handleAddToCart(productForCart) {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === productForCart.id,
    );

    if (existingItem) {
      existingItem.quantity += productForCart.quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, productForCart]);
    }
  }

  function handleQuantityUpdate(quantity, cartItem) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: quantity }
          : item,
      ),
    );
  }

  function handleDeleteProduct(cartItem) {
    setCart((cart) => cart.filter((item) => item.id !== cartItem.id));
  }

  function handleDeliveryPrice(cartItem, price) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === cartItem.id
          ? { ...item, deliveryPrice: price }
          : item,
      ),
    );
  }

  const totalDeliveryCost = cart.reduce(
    (total, item) => total + item.deliveryPrice,
    0,
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <MainPage
                cart={cart}
                setCart={setCart}
                cartQuantity={cartQuantity}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/OrderSummary"
            element={
              <OrderSummary
                cartQuantity={cartQuantity}
                cart={cart}
                handleQuantityUpdate={handleQuantityUpdate}
                handleDeleteProduct={handleDeleteProduct}
                netPrice={netPrice}
                handleDeliveryPrice={handleDeliveryPrice}
                totalDeliveryCost={totalDeliveryCost}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  /* testing */
}
