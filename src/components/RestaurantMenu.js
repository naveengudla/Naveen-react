import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./../components/RestaurantCategeory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const menuData = useRestaurantMenu(id);
  const [showItemIndex, setshowItemIndex] = useState(null);

  return (
    <div className="p-4 m-4">
      <h2 className="text-lg font-semibold text-center">Restaurent Menu</h2>
      <ul>
        {menuData
          ?.filter((item) => item.card?.card?.itemCards)
          .map((item, index) => (
            <div
              className="mb-4 p-4 w-[75%] m-auto"
              key={item.card.card.itemCards[0].card.info.id}
            >
              <RestaurantCategory
                restaurantInfo={item.card.card.itemCards}
                showItems={index === showItemIndex ? true : false}
                setShowItemsClick={() => setshowItemIndex(index === showItemIndex ? null : index)}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
