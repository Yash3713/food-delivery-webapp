import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import FilterRest from "./FilterRest";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (loading) return; // Prevent multiple fetches at the same time
    setLoading(true);

    const data = await fetch(`${RES_API}?page=${page}`);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      ...restaurants,
    ]);
    setOriginalList((prevRestaurants) => [...prevRestaurants, ...restaurants]);
    setFilteredRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      ...restaurants,
    ]);
    setPage((prevPage) => prevPage + 1); // Increment the page number
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        fetchData(); // Fetch more data when user reaches the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const toggleFilter = () => {
    if (isFiltered) {
      // If already filtered, reset to the original list
      setFilteredRestaurants(originalList);
    } else {
      // Apply the filter
      const filteredList = filteredRestaurants.filter(
        (res) => res.info.avgRating > 4
      );
      setFilteredRestaurants(filteredList);
    }
    setIsFiltered(!isFiltered); // Toggle the filter state
  };

  const filterRes = () => {
    setShowCard(!showCard);
  };

  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false) return <h1>You are Offline!!!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex px-4  items-center">
        <div className="px-2 mr-2 m-10">
          <input
            className="border-2 rounded xl"
            type="text"
            placeholder="Restaurants, Dish or Cuisine "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="border-2 border-gray-300 px-4 rounded-xl hover:font-semibold"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className={`px-4 mx-2 border-2 border-gray-300 rounded-xl hover:font-semibold ${
              showCard ? "bg-orange-500 text-white" : "border-2 border-gray-300"
            }`}
            onClick={filterRes}
          >
            Filter
          </button>
        </div>
        <div>
          <button
            className={`px-4 border-2 border-gray-300 rounded-xl hover:font-semibold ${
              isFiltered
                ? "bg-orange-500 text-white"
                : "border-2 border-gray-300"
            }`}
            onClick={toggleFilter}
          >
            Rating 4+
          </button>
        </div>
      </div>
      {showCard && (
        <FilterRest closeFilter={filterRes} ratingsFilter={toggleFilter} />
      )}
      <div className="flex flex-wrap p-4 m-4 justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
      {loading && <div>Loading more restaurants...</div>}
    </div>
  );
};

export default Body;
