import { CartItemContainer, CartItemDetails } from "./cart-item.styles.jsx";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
