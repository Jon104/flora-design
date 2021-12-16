import BurgerMenu from "components/tron/BurgerMenu";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import Panaches from "./pages/Panaches";
import Boutique from "./pages/Boutique";
import CreateTogether from "./pages/CreateTogether";
import MyApproach from "./pages/MyApproach";
import PersonalPiece from "./pages/PersonalPiece";
import Thanks from "./pages/Thanks";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider as Mui } from "@mui/material/styles";
import { useEffect, useState, useCallback } from "react";
import { commerce } from "./lib/commerce";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton } from "@mui/material";
import CartDrawer from "components/cart/CartDrawer";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:
      "Lato"
  }
  `;

const theme = {
  primary: "#9F2E0E",
};

const themeMui = createTheme({
  palette: {
    primary: {
      main: "#9F2E0E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});

function App() {
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

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  };

  const Logo = styled.img`
    position: absolute;
    z-index: 2;
    width: 120px;
  `;

  return (
    <Router>
      <Mui theme={themeMui}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Logo src="./img/logo.png" alt="Logo" />
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
            <CartDrawer
              cart={cart}
              isOpen={isOpen}
              onClose={() => toggleForm(false)}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
            <BurgerMenu />
            <GlobalStyle />
            <Switch>
              <Route
                path="/boutique"
                exact
                render={(props) => {
                  return (
                    <Boutique
                      {...props}
                      products={products}
                      onAddToCart={handleAddToCart}
                    />
                  );
                }}
              />
              <Route
                path="/checkout"
                exact
                render={(props) => {
                  return <Checkout {...props} cart={cart} />;
                }}
              />
              <Route path="/ma-démarche" component={MyApproach} />
              <Route path="/ensemble" component={CreateTogether} />
              <Route path="/personal-pieces" component={PersonalPiece} />
              <Route path="/panaches" component={Panaches} />
              <Route path="/thanks" component={Thanks} />
              <Route path="/" component={Landing} />
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Mui>
    </Router>
  );
}

export default App;
