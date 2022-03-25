import BurgerMenu from "components/tron/BurgerMenu";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Landing from "./home/HomePage";
import Panaches from "./panaches/PanachesPage";
import Boutique from "./boutique/pages/Boutique";
import CreateTogether from "./createTogether/CreateTogetherPage";
import MyApproach from "./myApproach/MyApproachPage";
import PersonalPiece from "./personalPiece/PersonalPiecePage";
import Classes from "./classes/ClassesPage";
import Thanks from "./pages/Thanks";
import Checkout from "./boutique/pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider as Mui } from "@mui/material/styles";
import { useEffect, useState, useCallback } from "react";
import { commerce } from "./lib/commerce";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, IconButton } from "@mui/material";
import Cart from "components/cart/Cart";
import styled from "styled-components";
import { groupProductsByCategory } from "services/ProductServices";
import { isMobile } from "react-device-detect";

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
      .list({
        limit: 100,
      })
      .then((products) => setProducts(groupProductsByCategory(products.data)))
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }, []);

  const fetchCart = useCallback(() => {
    commerce.cart
      .retrieve()
      .then(async (cart) => {
        if (
          cart.subtotal.raw <= 75 &&
          cart.discount.code === "CréditLivraison"
        ) {
          await fetch(`https://api.chec.io/v1/carts/${cart.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Authorization": process.env.REACT_APP_CHEC_PUBLIC_KEY,
            },
            body: JSON.stringify({ discount_code: "" }),
          });
        }
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

  const handleAddToCart = (productId, quantity, variant = {}) => {
    commerce.cart
      .add(productId, quantity, variant)
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

  const Logo = styled.img`
    position: absolute;
    z-index: 2;
    width: 150px;

    @media (max-width: 600px) {
      width: 100px;
    }
  `;

  return (
    <Router>
      <Mui theme={themeMui}>
        <ThemeProvider theme={theme}>
          <div>
            <Logo src="./img/logo.png" alt="Logo" />
            <Box
              padding={1}
              marginTop={1.5}
              sx={{
                position: "fixed",
                right: isMobile ? "5rem" : "6.5rem",
                justifyContent: "end",
                display: "flex",
                zIndex: 10,
              }}
            >
              <IconButton
                aria-label="shopping-cart"
                onClick={() => toggleForm(true)}
                size="large"
              >
                <Badge badgeContent={cart.total_items} color="primary">
                  <ShoppingCartIcon color="primary" fontSize="inherit" />
                </Badge>
              </IconButton>
            </Box>
            <Cart
              cart={cart}
              isOpen={isOpen}
              onClose={() => toggleForm(false)}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
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
                      productsByCategory={products}
                      onAddToCart={handleAddToCart}
                    />
                  );
                }}
              />
              <Route
                path="/checkout"
                exact
                render={(props) => {
                  return (
                    <Checkout cart={cart} url={cart.hosted_checkout_url} />
                  );
                }}
              />
              {/* <Route
                path="/confirmation"
                exact
                render={(props) => {
                  if (!order) return history.push("/");
                  return <Confirmation {...props} order={order} />;
                }}
              /> */}
              <Route path="/ma-démarche" component={MyApproach} />
              <Route path="/ensemble" component={CreateTogether} />
              <Route path="/personal-pieces" component={PersonalPiece} />
              <Route path="/panaches" component={Panaches} />
              <Route
                path="/cours-et-fournitures"
                render={(props) => (
                  <Classes
                    productsByCategory={products}
                    onAddToCart={handleAddToCart}
                  />
                )}
              />
              <Route path="/thanks" component={Thanks} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </ThemeProvider>
      </Mui>
    </Router>
  );
}

export default App;
