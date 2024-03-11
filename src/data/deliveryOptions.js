import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
    tag: " Free Shipping",
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
    tag: " - Shipping",
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
    tag: " - Shipping",
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}

function isWeekEnd(date) {
  const dayOfWeek = date.format("dddd");
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
}

export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, "day");

    if (!isWeekEnd(deliveryDate)) {
      remainingDays = remainingDays - 1;
    }
  }

  const dateString = deliveryDate.format("dddd, MMMM D");

  return dateString;
}
