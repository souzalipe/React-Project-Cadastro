import { CartProductCard } from "../cart-product-card/card-product-card"

export const Cart = () => {
  return (
    <ul>
      <h1>Cart</h1>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </ul>
  )
}