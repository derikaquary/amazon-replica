import { Link } from "react-router-dom";

export default function Header({ cart, cartQuantity }) {
  return (
    <header className="header">
      <Link className="logo">logo</Link>
      <input className="input" type="text" />
      <button>🔍</button>
      <a href="">returns and order</a>
      <Link to="/OrderSummary">
        cart Icon (<span>{`${cartQuantity}`}</span>)
      </Link>
    </header>
  );
}
