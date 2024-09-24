/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fetchCollection, deleteDocument } from "../services/firebaseService";
import toast from "react-hot-toast";

function MyState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // State variables for products, orders, and users
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [getAllOrder, setGetAllOrder] = useState([]);
  const [getAllUser, setGetAllUser] = useState([]);

  /**========================================================================
   *                          DELETE Order Function
   *========================================================================**/
  const orderDelete = async (id) => {
    try {
      await deleteDocument("order", id, setLoading);
      toast.success("Order Deleted Successfully");
    } catch {
      toast.error("Order Delete Failed");
    }
  };

  useEffect(() => {
    const unsubscribeProducts = fetchCollection("products", setGetAllProduct, setLoading);
    const unsubscribeOrders = fetchCollection("order", setGetAllOrder, setLoading);
    const unsubscribeUsers = fetchCollection("users", setGetAllUser, setLoading);

    // Cleanup on unmount
    return () => {
      unsubscribeProducts();
      unsubscribeOrders();
      unsubscribeUsers();
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllOrder,
        getAllUser,
        orderDelete,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
