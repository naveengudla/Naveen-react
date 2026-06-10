import { IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleToggleItem = (menuItem) => {
    if (iscartItemAdded(menuItem)) {
      dispatch(removeItemFromCart(menuItem));
    } else {
      dispatch(addItemToCart(menuItem));
    }
  };

  const iscartItemAdded = (item) =>
    cartItems.some((cartItem) => cartItem.card.info.id === item.card.info.id);

  return (
    <ul className="list-inside">
      {items.map((menuItem) => (
        <li
          key={menuItem.card.info.id}
          className="flex justify-between p-5 border-b-2 border-gray-300"
        >
          <div className="mb-5">
            <div>
              {menuItem.card.info.name}-{" "}
              <span>₹{menuItem.card.info.price / 100}</span>
            </div>
            <p>{menuItem.card.info.description}</p>
          </div>
          <div>
            <button
              className="bg-black text-white py-1 px-1 rounded absolute cursor-pointer"
              onClick={() => handleToggleItem(menuItem)}
            >
              {iscartItemAdded(menuItem) ? "Remove-" : "Add+"}
            </button>
            <img
              className="w-24 h-24"
              src={`${IMG_URL}${menuItem.card.info.imageId}`}
              alt={menuItem.card.info.name}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
