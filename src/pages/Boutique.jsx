import { Box, Button, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { commerce } from "../lib/commerce";
import CartDrawer from "../components/cart/CartDrawer";
import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Boutique = () => {
  const [isOpen, toggleForm] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    commerce.products
      .list()
      .then((products) => setProducts(products.data))
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }, []);

  const fetchCart = useCallback(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }, []);

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, [fetchCart, fetchProducts]);

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  };

  return (
    <>
      <Box
        padding={1}
        marginTop={1.5}
        sx={{
          position: "fixed",
          right: 100,
          justifyContent: "end",
          display: "flex",
        }}
      >
        <IconButton
          aria-label="shopping-cart"
          onClick={() => toggleForm(true)}
          size="large"
        >
          <ShoppingCartIcon color="primary" fontSize="inherit" />
        </IconButton>
      </Box>
      <Grid container>
        {products.map((product) => (
          <Box padding={4}>
            <Grid item xs={3}>
              <p>{product.name}</p>
              <img src={product.image.url} alt="yop" width="300" />
              <Button onClick={() => handleAddToCart(product.id, 1)}>
                Add to cart
              </Button>
            </Grid>
          </Box>
        ))}
      </Grid>
      <CartDrawer
        cart={cart}
        isOpen={isOpen}
        onClose={() => toggleForm(false)}
      />
    </>
  );
};

export default Boutique;
