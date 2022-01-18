import { Box, Button, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = (props) => {
  const { item } = props;

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    props.onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) =>
    props.onRemoveFromCart(lineItemId);

  return (
    <Box sx={{ width: 500 }} p={2}>
      <Grid container alignItems="center" justifyContent="space-around">
        <Grid item xs={3}>
          <img alt="A product of the cart" width="100px" src={item.image.url} />
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <label>
                {item.quantity} x {item.name}
              </label>
            </Grid>
            <Grid item xs={12}>
              <Box pt={0.5}>
                <IconButton
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                  size="small"
                >
                  <RemoveIcon color="primary" fontSize="inherit" />
                </IconButton>
                <IconButton
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                  size="small"
                >
                  <AddIcon color="primary" fontSize="inherit" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={12}>
              <label>{item.line_total.formatted_with_symbol}</label>
            </Grid>
            <Grid item xs={12}>
              <Box pt={0.5}>
                <Button
                  sx={{ fontSize: 12 }}
                  size="small"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Supprimer
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
