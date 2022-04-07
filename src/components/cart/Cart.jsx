import { Box, Drawer, Grid, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CloseIcon from "@mui/icons-material/Close";

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
        <Grid
          sx={{
            position: "sticky",
            backgroundColor: "white",
            bottom: 0,
            paddingBottom: "2rem",
          }}
          container
          justifyContent="flex-end"
        >
          <Grid item xs={8} />
          <Grid item xs={2}></Grid>

          <Grid item xs={3}>
            <p>Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
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
      <Box p={2}>
        <Grid container justifyContent="end">
          <IconButton
            aria-label="close-form"
            onClick={props.onClose}
            size="large"
            right
            sx={{ transform: "scale(1.4)" }}
          >
            <CloseIcon color="primary" fontSize="inherit" />
          </IconButton>
        </Grid>
      </Box>

      <Box px={2}>
        <Box pb={4}>
          <h4>Votre panier</h4>
        </Box>
        {renderEmptyCart()}
        {renderCart()}
      </Box>
    </Drawer>
  );
};

export default Cart;
