import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { Fragment } from "react";
import { isMobile } from "react-device-detect";
import { Subtitle } from "services/TypoService";
import Product from "../components/Product";

const Boutique = ({ onAddToCart, productsByCategory }) => {
  const cartIsLoaded = () => productsByCategory.length > 0;

  const renderLoading = () => {
    if (cartIsLoaded()) return;

    return (
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
    );
  };

  return (
    <>
      <Box padding={isMobile ? 1 : 8} paddingTop={26}>
        <Grid container alignItems="end">
          {renderLoading()}
          {productsByCategory.map((category, i) => (
            <Fragment key={i}>
              <Grid item xs={12}>
                <Box>
                  <Subtitle>{category.name}</Subtitle>
                </Box>
              </Grid>

              {category.data.map((product, i) => (
                <Grid key={i} item sm={12} md={6} lg={4} xl={3} padding={4}>
                  <Product onAddToCart={onAddToCart} product={product} />
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Boutique;
