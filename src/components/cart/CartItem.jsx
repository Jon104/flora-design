const CartItem = (props) => {
  const { item } = props;

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    props.onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) =>
    props.onRemoveFromCart(lineItemId);

  return (
    <div className="cart-item">
      {/* <img
        className="cart-item__image"
        src={item.media.source}
        alt={item.name}
      /> */}
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <button
            type="button"
            title="Reduce quantity"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            title="Increase quantity"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item__details-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <button type="button" onClick={() => handleRemoveFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
