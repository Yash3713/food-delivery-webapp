import { IMG_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData.info;
  const { slaString } = resData.info.sla;
  return (
    <div className="relative w-[360px] h-[350px] m-10 border-solid bg-gray-50 rounded-lg hover:bg-gray-200">
      <div className="relative w-[350px] h-[200px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          alt=""
          src={IMG_URL + cloudinaryImageId}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
      </div>
      <h1 className="pl-3 my-2 font-semibold">{name}</h1>
      <span className="pl-3 my-2 font-medium">{"*" + avgRating}</span>
      <span className="pl-3 my-2 font-medium">{slaString}</span>
      <h4 className="pl-3 my-2 font-light truncate max-w-full">
        {cuisines.join(",")}
      </h4>
      <h4 className="pl-3 mt-2 font-bold text-xl absolute top-[160px] text-white">
        {costForTwo}
      </h4>
      <h4 className="pl-3 my-2 font-light">{areaName}</h4>
    </div>
  );
};

export default ResCard;
