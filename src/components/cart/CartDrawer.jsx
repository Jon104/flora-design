import { Drawer } from "@mui/material";
import Cart from "./Cart";

const CartDrawer = (props) => {
  return (
    <>
      <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
        <Cart cart={props.cart} />
      </Drawer>
    </>
  );
};

export default CartDrawer;
