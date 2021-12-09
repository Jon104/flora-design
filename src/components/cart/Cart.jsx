import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const renderEmptyCart = () => {
    const { cart } = props;
    if (cart.total_unique_items && cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  };

  const renderCart = () => {
    const { cart } = props;
    if (cart.total_unique_items && cart.total_unique_items === 0) {
      return;
    }

    return (
      <>
        {cart.line_items &&
          cart.line_items.map((lineItem) => (
            <CartItem
              item={lineItem}
              key={lineItem.id}
              className="cart__inner"
              onUpdateCartQty={props.onUpdateCartQty}
              onRemoveFromCart={props.onRemoveFromCart}
            />
          ))}
        <div className="cart__total">
          <p className="cart__total-title">Subtotal:</p>
          <p className="cart__total-price">
            {cart.subtotal && cart.subtotal.formatted_with_symbol}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      {renderEmptyCart()}
      {renderCart()}
      <div className="cart__footer">
        <button className="cart__btn-empty" onClick={props.onEmptyCart}>
          Empty cart
        </button>
        <Link className="cart__btn-checkout" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
