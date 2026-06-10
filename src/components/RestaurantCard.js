
const RestaurantCardComponent = ({restaurantInfo}) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurantInfo;
  return (
    <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-md flex-wrap">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` }
        alt={name}
        className="w-60 h-60 rounded-lg mb-4"
      />
      <h3>{name}</h3>
      <p className="w-60">Cuisine : {cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default RestaurantCardComponent;