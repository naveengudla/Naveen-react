import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="w-1/2 mx-auto mt-5">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      {cartItems.length === 0 && (
        <p className="text-center m-5">Your cart is empty.</p>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;
