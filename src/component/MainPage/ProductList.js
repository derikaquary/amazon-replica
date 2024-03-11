import { useState } from "react";
import { products } from "../../data/products.js";

export default function ProductList({
  cart,
  setCart,
  handleAddToCart,
  updateCartQuantity,
  selectElement,
  setSelectElement,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSelectProduct(product) {
    setSelectedProduct(product);
  }

  return (
    <ul className="product-list">
      {products &&
        products.map((product) => (
          <Product
            product={product}
            selectedProduct={selectedProduct}
            handleAddToCart={handleAddToCart}
            handleSelectProduct={handleSelectProduct}
            key={product.keywords}
          />
        ))}
    </ul>
  );
}
//////////////////////////////////////////////////////
function Product({
  product,
  selectedProduct,
  handleAddToCart,
  handleSelectProduct,
}) {
  const [selectElement, setSelectElement] = useState(1);

  const [showAdded, setShowAdded] = useState(false);
  /* const [cart2, setCart2] = useState([]) */

  function handleSubmit(e) {
    e.preventDefault();

    const productForCart = {
      image: selectedProduct.image,
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.priceCents,
      quantity: selectElement,
      deliveryPrice: 0,
    };

    handleAddToCart(productForCart);
  }

  function handleShowAdded() {
    setShowAdded((showAdded) => !showAdded);
    setTimeout(() => {
      setShowAdded(false);
    }, 1000);
  }
  return (
    <li>
      <ImageAndNAme product={product} />
      <StarRating />
      <Price product={product} />
      <ProductSelectorForm
        product={product}
        handleSubmit={handleSubmit}
        selectElement={selectElement}
        setSelectElement={setSelectElement}
        showAdded={showAdded}
        handleSelectProduct={handleSelectProduct}
        handleShowAdded={handleShowAdded}
      />
    </li>
  );
}

function ImageAndNAme({ product }) {
  return (
    <div className="image-n-name">
      <div className="product-image-div">
        <img
          className="product-image"
          src={product.image}
          alt={product.image}
        />
      </div>
      <p>{product.name}</p>
    </div>
  );
}

function StarRating({
  maxRating = 5,
  messages = ["Terrible", "Bad", "Okay", "Good", "Amazing"],
  color = "#fcc419",
  size = 22,
  defaultRating = 3,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div className="container-style">
      <div className="start-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onClick, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
    color,
    size,
  };

  return (
    <span
      role="button"
      style={starStyle}
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

function Price({ product }) {
  return (
    <p className="price">${(product.priceCents * 0.01).toFixed(2)}</p>
  );
}

function ProductSelectorForm({
  product,
  handleSubmit,
  selectElement,
  setSelectElement,
  showAdded,
  handleSelectProduct,
  handleShowAdded,
}) {
  return (
    <form className="select-button" onSubmit={handleSubmit}>
      <SelectProductButton
        selectElement={selectElement}
        setSelectElement={setSelectElement}
        showAdded={showAdded}
      />

      <div className="add-to-cart-div">
        <button
          onClick={() => {
            handleSelectProduct(product);
            handleShowAdded();
          }}
        >
          Add to Cart
        </button>
      </div>
    </form>
  );
}

function SelectProductButton({
  selectElement,
  setSelectElement,
  showAdded,
}) {
  return (
    <div className="select-button-container">
      <select
        value={selectElement}
        onChange={(e) => setSelectElement(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, index) => index).map(
          (num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ),
        )}
      </select>
      {showAdded && (
        <div className="added-to-cart">Added to cart</div>
      )}
    </div>
  );
}
