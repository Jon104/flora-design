import React from "react";
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useCallback } from "react";
import { commerce } from "lib/commerce";
import { useState } from "react";

const Checkout = (props) => {
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(true);
  const fetchCart = useCallback(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        if (
          cart.subtotal.raw >= 75 &&
          cart.discount.code !== "CréditLivraison"
        ) {
          fetch(`https://api.chec.io/v1/carts/${cart.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Authorization": process.env.REACT_APP_CHEC_PUBLIC_KEY,
            },
            body: JSON.stringify({ discount_code: "CréditLivraison" }),
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
        <div style={{ position: "relative", height: "100vh" }}>
          {isLoadingCheckout && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <Grid container justifyContent="center">
                <Box pt={8}>
                  <CircularProgress />
                </Box>
              </Grid>
            </Backdrop>
          )}
          <iframe
            onLoad={() => setIsLoadingCheckout(false)}
            id="checkout_iframe"
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
