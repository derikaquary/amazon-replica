export default function Bill({
  cartQuantity,
  netPrice,
  totalDeliveryCost,
}) {
  const calcNetprice = netPrice * 0.01 * cartQuantity;
  const calcNetpriceDisplay = parseFloat(calcNetprice.toFixed(2));

  const calcDeliveryCost = parseFloat(
    (totalDeliveryCost * 0.01).toFixed(2),
  );

  const totalBeforeTax = calcNetprice + calcDeliveryCost;
  const totalBeforeTaxDisplay = parseFloat(totalBeforeTax.toFixed(2));

  const taxTenPercent = (totalBeforeTax * 0.1 * 100) / 100;
  const taxTenPercentDisplay = parseFloat(taxTenPercent.toFixed(2));

  const totalPrice = calcNetprice + calcDeliveryCost + taxTenPercent;
  const totalPriceDisplay = parseFloat(totalPrice.toFixed(2));
  return (
    <div className="bill">
      <h3>Order Summary</h3>
      <div>
        <span>Item ({cartQuantity}):</span>
        <span>{calcNetpriceDisplay} $</span>
      </div>
      <div>
        <span>Shipping & handling:</span>
        <span>{calcDeliveryCost} $</span>
      </div>
      <span className="line1"></span>
      <div>
        <span>Total before tax:</span>
        <span>{totalBeforeTaxDisplay} $</span>
      </div>
      <div>
        <span>Estimated tax(10%):</span>
        <span>{taxTenPercentDisplay} $</span>
      </div>
      <span className="line2"></span>
      <div>
        <span>Order Total:</span>
        <span>{totalPriceDisplay} $</span>
      </div>
      <div className="button-container">
        <button className="place-order-button">
          Place your order
        </button>
      </div>
    </div>
  );
}
