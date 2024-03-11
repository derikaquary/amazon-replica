import HeaderOfSummary from "../component/OrderSummary/HeaderOfSummary";
import CartSummary from "../component/OrderSummary/CartSummary";

export default function OrderSummary({
  cart,
  cartQuantity,
  handleQuantityUpdate,
  handleDeleteProduct,
  netPrice,
  handleDeliveryPrice,
  totalDeliveryCost,
}) {
  return (
    <div>
      <HeaderOfSummary cartQuantity={cartQuantity} />
      <CartSummary
        cart={cart}
        handleQuantityUpdate={handleQuantityUpdate}
        handleDeleteProduct={handleDeleteProduct}
        cartQuantity={cartQuantity}
        netPrice={netPrice}
        handleDeliveryPrice={handleDeliveryPrice}
        totalDeliveryCost={totalDeliveryCost}
      />
    </div>
  );
}
