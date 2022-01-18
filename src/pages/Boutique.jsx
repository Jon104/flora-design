import { Box, CircularProgress, Grid, IconButton } from "@mui/material";
import { isMobile } from "react-device-detect";
import AddIcon from "@mui/icons-material/Add";
import { Subtitle } from "services/TypoService";

const Boutique = (props) => {
  const cartIsLoaded = () => props.productsByCategory.length > 0;

  const renderLoading = () => {
    if (cartIsLoaded()) return;

    return (
      <Grid container xs={12} justifyContent="center">
        <CircularProgress />
      </Grid>
    );
  };

  return (
    <>
      <Box padding={isMobile ? 1 : 8} paddingTop={18}>
        <Grid container xs={12} alignItems="end">
          {renderLoading()}
          {props.productsByCategory.map((category) => (
            <>
              <Grid item xs={12}>
                <Box>
                  <Subtitle>{category.name}</Subtitle>
                </Box>
              </Grid>

              {category.data.map((product) => (
                <Grid item sm={12} md={6} lg={4} xl={3} padding={4}>
                  <Box>
                    <img
                      src={product.image.url}
                      alt="yop"
                      height="auto"
                      width="100%"
                    />
                  </Box>

                  <Grid container alignItems="center" justifyContent="flex-end">
                    <Grid item xs={10}>
                      <p>{product.name}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton
                        onClick={() => props.onAddToCart(product.id, 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
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
