import { useState } from "react";
import { deliveryOptions } from "../../../data/deliveryOptions";
import DeliveryOption from "./DeliveryOption";

export default function CartItem({
  cartItem,
  handleQuantityUpdate,
  handleDeleteProduct,
  handleDeliveryPrice,
}) {
  const [showUpdate, setShowUpdate] = useState(true);

  const [quantity, setQuantity] = useState(cartItem.quantity);

  const [dummyButton, setDummyButton] = useState(0);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based (0 for January)
  const day = today.getDate();

  const formattedDate = `${year}-${
    month < 10 ? "0" + month : month
  }-${day < 10 ? "0" + day : day}`;

  const [deliveryDate, setDeliveryDate] = useState(0);

  function handleShowUpdate() {
    setShowUpdate((showUpdate) => !showUpdate);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleQuantityUpdate(quantity, cartItem);
    setShowUpdate(true); // Ensure we toggle back to "Update" after submission
  }

  // Directly handle the save action without a form submission event
  function handleSaveClick() {
    handleQuantityUpdate(quantity, cartItem);
    setShowUpdate(true); // Ensure we toggle back to "Update" after submission
  }

  function handleDummyButton(price) {
    setDummyButton(price);
  }

  return (
    <li className="cart-summary">
      <h3 className="title-cart-item">
        Delivery date: Tuesday, February 27
      </h3>

      <div className="cart-product">
        <div>
          <div className="image-cart-div">
            <img src={cartItem.image} alt="" />
          </div>
          <div>
            <p>{cartItem.name}</p>
            <p>{(cartItem.price * 0.01).toFixed(2)}</p>
            <span>
              Quantity:{" "}
              {showUpdate && <span>{cartItem.quantity} </span>}
            </span>
            {showUpdate && (
              <span className="update" onClick={handleShowUpdate}>
                Update{" "}
              </span>
            )}
            <form className="form" onSubmit={handleSubmit}>
              {!showUpdate && (
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(parseInt(e.target.value))
                  }
                />
              )}
              {!showUpdate && (
                <span className="update" onClick={handleSaveClick}>
                  Save{" "}
                </span>
              )}
            </form>
            <span
              className="update"
              onClick={() => handleDeleteProduct(cartItem)}
            >
              Delete
            </span>
          </div>
        </div>
        <div>
          <h2>Choose a delivery option</h2>

          <form className="form-delivery-opt">
            {deliveryOptions.map((deliveryOption) => (
              <DeliveryOption
                cartItem={cartItem}
                deliveryOption={deliveryOption}
                key={deliveryOption.id}
                handleDeliveryPrice={handleDeliveryPrice}
                dummyButton={dummyButton}
                handleDummyButton={handleDummyButton}
              />
            ))}
          </form>
        </div>
      </div>
    </li>
  );
}
