import { useContext, useEffect, useState } from "react";
import TableRow from "../CheckOut/TableRow";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.err) {
          setOrders(data);
        } else {
          navigate("/");
        }
      });
  }, [navigate]);
  return (
    <div className="ml-4">
      <h2 className="text-5xl">Your Order History</h2>
      <div className="overflow-x-auto ml-32 mt-4">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Description</th>
              <th>Weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableRow key={order._id} order={order}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
