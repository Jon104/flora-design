import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { isMobile } from "react-device-detect";

const Checkout = (props) => {
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
