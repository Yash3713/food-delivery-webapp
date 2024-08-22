import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      //"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  //console.log(categories);
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold m-5 w-[250px] text-left border border-gray-200 ">
          {name}
        </h2>
      </div>
      <div className="flex border-2 border-b-gray-200 rounded-lg w-56 mx-auto">
        <p>{cuisines.join(",")}</p>
        <p>
          {costForTwoMessage}-{avgRating}
        </p>
      </div>
      <div>
        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            index={index}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <h3>
              {item.card.info.name}-{item.card.info.price / 100}
            </h3>
            <p>{item.card.info.description}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
