import { useState } from "react";
import Header from "../component/MainPage/Header";
import ProductList from "../component/MainPage/ProductList";

///////////////////////////////////////////////////////////
export default function MainPage({
  cart,
  cartQuantity,
  setCart,
  handleAddToCart,
  selectElement,
  setSelectElement,
}) {
  return (
    <div>
      <Header cart={cart} cartQuantity={cartQuantity} />
      <ProductList
        cart={cart}
        setCart={setCart}
        handleAddToCart={handleAddToCart}
        selectElement={selectElement}
        setSelectElement={setSelectElement}
      />
    </div>
  );
}
