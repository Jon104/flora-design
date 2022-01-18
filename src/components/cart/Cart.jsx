import { Box, Drawer, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const isCartEmpty = () => props.cart.total_unique_items === 0;

  const renderEmptyCart = () => {
    if (!isCartEmpty()) return;

    return (
      <Box>
        <p>Vous n'avez aucun item dans votre panier, commencer à en ajouter!</p>
        <Link to="/boutique" onClick={props.onClose}>
          Boutique
        </Link>
      </Box>
    );
  };

  const renderCart = () => {
    const { cart } = props;

    if (isCartEmpty()) return;

    return (
      <>
        {cart.line_items &&
          cart.line_items.map((lineItem) => (
            <CartItem
              item={lineItem}
              key={lineItem.id}
              onUpdateCartQty={props.onUpdateCartQty}
              onRemoveFromCart={props.onRemoveFromCart}
            />
          ))}
        <Grid container justifyContent="flex-end">
          <Grid item xs={8} />
          <Grid item xs={4}>
            <p>Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
          </Grid>

          <Grid item xs={4}>
            <Link to="/checkout" onClick={props.onClose}>
              Passer la commande
            </Link>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
      <Box p={4}>
        <h4>Votre panier</h4>
        {renderEmptyCart()}
        {renderCart()}
      </Box>
    </Drawer>
  );
};

export default Cart;
