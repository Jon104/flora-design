import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useCallback } from "react";
import { commerce } from "lib/commerce";

const Checkout = (props) => {
  const fetchCart = useCallback(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        if (cart.subtotal.raw >= 75 && cart.discount.code !== "MINUS10") {
          fetch(`https://api.chec.io/v1/carts/${cart.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Authorization": process.env.REACT_APP_CHEC_PUBLIC_KEY,
            },
            body: JSON.stringify({ discount_code: "MINUS10" }),
          });
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <>
      <Box pt={{ xs: isMobile ? 14 : 0 }}>
        <div style={{ position: "relative", paddingTop: "100vh" }}>
          <CircularProgress />
          <iframe
            id="myFrame"
            src={props.url}
            title="Chec.io hosted checkout"
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default Checkout;
