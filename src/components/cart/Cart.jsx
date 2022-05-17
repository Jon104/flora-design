import { Box, Drawer, Grid, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { secondaryColor } from "../../styles";
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  const history = useHistory();
  const isCartEmpty = () => props.cart.total_unique_items === 0;
  const { cart } = props;

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
      </>
    );
  };

  const handleGoToCheckout = () => {
    props.onClose();
    history.push("/checkout");
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

      <Box px={2} pb={16}>
        <Box pb={4}>
          <h4>Votre panier</h4>
        </Box>
        {renderEmptyCart()}
        {renderCart()}
      </Box>

      <TotalAmount>
        <Box px={3}>
          <Grid container>
            <Grid item>
              <b>
                <p>
                  Total: {cart.subtotal && cart.subtotal.formatted_with_symbol}
                </p>
              </b>
            </Grid>
          </Grid>
        </Box>
      </TotalAmount>

      <GoToCheckout onClick={handleGoToCheckout}>
        <Box px={3}>
          <Grid container>
            <Grid item>
              <h3>Passer la commande</h3>
            </Grid>
          </Grid>
        </Box>
      </GoToCheckout>
    </Drawer>
  );
};

const GoToCheckout = styled.div`
  position: fixed;
  background-color: ${secondaryColor};
  color: white;
  bottom: 0;
  width: 100%;
  height: 4rem;
  cursor: pointer;
`;

const TotalAmount = styled.div`
  position: fixed;
  background-color: white;
  padding-bottom: 4rem;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 20px 16px 14px #00000054;
`;

export default Cart;
