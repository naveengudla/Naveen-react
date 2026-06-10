import ItemList from "./ItemList";
const RestaurantCategory = ({
  restaurantInfo,
  showItems,
  setShowItemsClick,
}) => {
  return (
    <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-md ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {restaurantInfo[0].card.info.category}({restaurantInfo?.length})
        </h3>
        <span className="cursor-pointer" onClick={() => setShowItemsClick()}>
          ⬇️
        </span>
      </div>
      {showItems && <ItemList items={restaurantInfo} />}
    </div>
  );
};

export default RestaurantCategory;
