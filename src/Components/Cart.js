import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className=" p-2 m-4 flex justify-center ">
        <div className="text-xl font-bold">Cart</div>
      </div>
      <div className="w-6/12 m-auto border-2  border-gray-300 rounded-lg">
        <ItemList items={cartItems} className="py-10" />
      </div>
      {cartItems.length === 0 && (
        <div>
          <h1 className="p-2 m-4 flex justify-center font-bold">
            Cart Is Empty !!!. Add Items{" "}
          </h1>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="p-2 m-4 flex justify-center">
          <button
            className="bg-gray-200 rounded-lg m-2 p-2 "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
