import { Box, CircularProgress, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";
import { Subtitle } from "services/TypoService";
import Product from "../components/Product";

const Boutique = ({ onAddToCart, productsByCategory }) => {
  const cartIsLoaded = () => productsByCategory.length > 0;

  const renderLoading = () => {
    if (cartIsLoaded()) return;

    return (
      <Grid container xs={12} justifyContent="center">
        <Box pt={8}>
          <CircularProgress />
        </Box>
      </Grid>
    );
  };

  return (
    <>
      <Box padding={isMobile ? 1 : 8} paddingTop={18}>
        <Grid container xs={12} alignItems="end">
          {renderLoading()}
          {productsByCategory.map((category) => (
            <>
              <Grid item xs={12}>
                <Box>
                  <Subtitle>{category.name}</Subtitle>
                </Box>
              </Grid>

              {category.data.map((product) => (
                <Grid item sm={12} md={6} lg={4} xl={3} padding={4}>
                  <Product onAddToCart={onAddToCart} product={product} />
                </Grid>
              ))}
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Boutique;
