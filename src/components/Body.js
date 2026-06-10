import React, { useEffect, useState } from "react";
import RestaurantCardComponent from "./RestaurantCard";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantListData, setFilteredRestaurantListData] = useState(
    []
  );

  const fetchRestaurantListData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    setRestaurantListData(
      json?.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants || []
    );
    setFilteredRestaurantListData(
      json?.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants || []
    );
  };

  useEffect(() => {
    fetchRestaurantListData();
  }, []);

  function onSearchClick() {
    const filteredData = restaurantListData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantListData(filteredData);
  }

  return (
    <div className="bodyContainer">
      <div className="flex items-center p-4 m-4">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border border-gray-300 rounded w-[50%]"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => onSearchClick()}
        >
          Search
        </button>
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => {
            setSearchText("");
            setFilteredRestaurantListData(restaurantListData);
          }}
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-start px-10">
        {filteredRestaurantListData.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
            >
              <RestaurantCardComponent restaurantInfo={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
