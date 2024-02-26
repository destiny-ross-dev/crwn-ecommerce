import { useContext } from "react";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, CartItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <CartItemCount>{cartItemCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
