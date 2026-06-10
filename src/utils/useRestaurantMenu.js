import { useState, useEffect } from "react";
import { RES_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${RES_MENU}${resId}`);
      const data = await response.json();
      setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    };

    fetchMenu();
  }, []);

  return menu;
};

export default useRestaurantMenu;
