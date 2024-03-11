import { useState } from "react";
import CartItem from "./CartSummary/CartItem";
import { deliveryOptions } from "../../data/deliveryOptions";
import Bill from "./Bill";

export default function CartSummary({
  cart,
  handleQuantityUpdate,
  handleDeleteProduct,
  cartQuantity,
  netPrice,
  handleDeliveryPrice,
  totalDeliveryCost,
}) {
  return (
    <div>
      <h2 className="cart-summary-title">Review your order</h2>
      <div className="cart-summary-bill">
        <ul>
          {cart.map((cartItem) => (
            <CartItem
              cartItem={cartItem}
              key={cartItem.id}
              handleQuantityUpdate={handleQuantityUpdate}
              handleDeleteProduct={handleDeleteProduct}
              handleDeliveryPrice={handleDeliveryPrice}
            />
          ))}
        </ul>
        <Bill
          cart={cart}
          cartQuantity={cartQuantity}
          netPrice={netPrice}
          totalDeliveryCost={totalDeliveryCost}
        />
      </div>
    </div>
  );
}
