import { Box, Button, Grid } from "@mui/material";

const Boutique = (props) => {
  return (
    <>
      <Grid container>
        {props.products.map((product) => (
          <Box padding={4}>
            <Grid item xs={3}>
              <p>{product.name}</p>
              <img src={product.image.url} alt="yop" width="300" />
              <Button onClick={() => props.onAddToCart(product.id, 1)}>
                Add to cart
              </Button>
            </Grid>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Boutique;
