import ItemList from "./ItemList";

const ResCategory = ({ data, setShowIndex, showItems, index }) => {
  const handleclick = () => {
    setShowIndex(index);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-7 p-4  bg-gray-100 shadow-lg">
        <span
          className="font-bold text-lg cursor-pointer"
          onClick={handleclick}
        >
          {data.title}({data.itemCards.length})
        </span>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
