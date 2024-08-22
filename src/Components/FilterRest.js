const FilterRest = ({ closeFilter, ratingsFilter }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between border-b-2">
          <span className="text-xl font-bold mb-4">Filter</span>
          <span>
            <button onClick={closeFilter}>X</button>
          </span>
        </div>
        <div>
          <div className="border-b">
            <ul className="">
              <li className="m-2 cursor-pointer ">Sort </li>
              <li
                className="
                m-2 cursor-pointer"
              >
                Ratings
              </li>
              <li className="m-2 cursor-pointer"> Cost for two</li>
            </ul>
          </div>
        </div>
        <div className="">
          <button
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={ratingsFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterRest;
