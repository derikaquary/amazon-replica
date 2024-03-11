import { useState } from "react";
import { deliveryOptions } from "../../../data/deliveryOptions";

export default function DeliveryOption({
  cartItem,
  deliveryOption,
  handleDeliveryPrice,
  dummyButton,
  handleDummyButton,
}) {
  function handleDate(deliveryDays) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + deliveryDays);

    const year = nextDate.getFullYear();
    const month = months[nextDate.getMonth()]; // Get the month name
    const day = nextDate.getDate();
    const dayOfWeek = days[nextDate.getDay()]; // Get the day of the week

    const formattedDate = `${dayOfWeek}, ${month} ${day}`;

    return formattedDate;
  }

  return (
    <label className="delivery-option">
      <input
        className="bullet"
        type="radio"
        id={deliveryOption.id}
        name="options"
        value={deliveryOption.priceCents}
        checked={deliveryOption.priceCents === dummyButton}
        onChange={() => {
          handleDeliveryPrice(cartItem, deliveryOption.priceCents);
          handleDummyButton(deliveryOption.priceCents);
        }}
      />
      <div>
        <div className="date-div">
          <span>{`${handleDate(deliveryOption.deliveryDays)}`} </span>
          <span>
            , price:
            {(deliveryOption.priceCents * 0.01).toFixed(2)}$
            {deliveryOption.tag}
          </span>
        </div>
      </div>
      <br />
    </label>
  );
}
