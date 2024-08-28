import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const dispatch = useDispatch();
  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const rating = item?.card?.info?.ratings?.aggregatedRating?.rating;
        const ratingCount =
          item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2;
        const truncatedDescription = truncateText(
          item?.card?.info?.description,
          250
        ); // Adjust the maxLength as needed

        return (
          <div
            key={item?.card?.info?.id}
            className="m-2 p-2 border-b-2 border-gray-200 flex justify-between"
          >
            <div>
              <div className="9/12">
                <div className="text-lg font-semibold">
                  {item?.card?.info?.name}
                </div>
                <div className="font-medium">
                  ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </div>
                {rating && ratingCount && (
                  <div className="text-sm my-2">
                    ★ {rating} ({ratingCount})
                  </div>
                )}
              </div>
              <p className="text-xs mr-2">{truncatedDescription}</p>
            </div>
            <div className="w-3/12 px-2 relative">
              <div className="absolute font-semibold left-[38%] -bottom-2 ">
                <button
                  className="bg-white px-4 py-1 text-green-700 rounded-md hover:bg-gray-200"
                  onClick={() => handleAddClick(item)}
                >
                  ADD
                </button>
              </div>
              <img
                src={IMG_URL + item?.card?.info?.imageId}
                className="rounded-lg"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
