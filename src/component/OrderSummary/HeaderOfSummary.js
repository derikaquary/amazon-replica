import { Link } from "react-router-dom";

export default function HeaderOfSummary({ cartQuantity }) {
  return (
    <header>
      <Link className="logo" to="/">
        Back to Main Page
      </Link>
      <h2 className="checkout">Checkout</h2>
      <span>({cartQuantity})</span>
    </header>
  );
}
