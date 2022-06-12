import styled from "styled-components";
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Subtitle } from "services/TypoService";
import Product from "../components/Product";
import Footer from "components/Footer";

// const BannerText = styled.p`
//   font-family: Barlow;
//   font-size: 16px;
//   font-weight: 300;
//   color: white;
//   text-align: center;

//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;

const MainTitle = styled.p`
  font-family: Lato;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0.30000001192092896px;
  font-size: 36px;
  color: #9f2e0e;
`;

const Boutique = ({ onAddToCart, productsByCategory }) => {
  const cartIsLoaded = () => productsByCategory.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* <Grid
        container
        alignItems="center"
        alignContent="center"
        sx={{ position: "fixed", bottom: 0, zIndex: 6 }}
      >
        <Grid item xs={12} sx={{ backgroundColor: "#9f2e0e", zIndex: 6 }}>
          <BannerText>
            Livraison gratuite au Québec pour toute commande de plus de 75$
          </BannerText>
        </Grid>
      // </Grid> */}
      <Box paddingTop={14}>
        <Grid container alignItems="end">
          {renderLoading()}
          <Box px={3}>
            <MainTitle>BOUTIQUE</MainTitle>
          </Box>
          {productsByCategory.map((category, i) => (
            <Fragment key={i}>
              <Grid item xs={12}>
                <Box padding={isMobile ? 3 : 8}>
                  <Subtitle>{category.name}</Subtitle>
                </Box>
              </Grid>

              {category.data.map((product, i) => (
                <Grid key={i} item xs={12} md={6} lg={4} xl={3} padding={4}>
                  <Product onAddToCart={onAddToCart} product={product} />
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Boutique;
