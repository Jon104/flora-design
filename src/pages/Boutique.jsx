import { Box, Button, Grid } from "@mui/material";

const Boutique = (props) => {
  return (
    <>
      <Box padding={16}>
        <Grid container xs={12} justifyContent="center">
          {props.products.map((product) => (
            <>
              <Grid item xs={4}>
                <p>{product.name}</p>
                <Box>
                  <img src={product.image.url} alt="yop" width="300" />
                </Box>
                <Button onClick={() => props.onAddToCart(product.id, 1)}>
                  Add to cart
                </Button>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Boutique;
