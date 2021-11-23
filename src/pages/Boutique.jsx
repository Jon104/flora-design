import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { commerce } from "../lib/commerce";

const Boutique = () => {
  const [products, setProducts] = useState([]);
  const [, setCart] = useState({});

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

  const fetchProducts = useCallback(() => {
    commerce.products
      .list()
      .then((products) => setProducts(products.data))
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }, []);

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

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, [fetchCart, fetchProducts]);

  return (
    <>
      {products.map((product) => (
        <div>
          <p>{product.id}</p>
          <img src={product.image.url} alt="yop" width="300" />
          <button
            name="Add to cart"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            Quick add
          </button>
        </div>
      ))}
    </>
  );
};

export default Boutique;
