import { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/orders?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "applicattion/json",
        },
      }
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

  const calculateSubtotal = () => {
    return orders.reduce((total, order) => {
      const price = parseFloat(order.price);
      return total + price;
    }, 0);
  };
  const handleCheckOut = () => {
    Swal.fire({
      title: "Successfull",
      text: `Thanks For Shopping`,
      icon: "Success",
      confirmButtonText: "Continue",
    })(navigate("/"));
  };
  return (
    <div className="ml-4">
      <h2 className="text-5xl">Check Out</h2>
      <div className="overflow-x-auto ml-32">
        <table className="table">
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
            <td></td>
            <td>
              <p className="font-bold text-xl">Total</p>
            </td>
            <td className="font-bold text-xl">{calculateSubtotal()}Tk</td>
          </tbody>
        </table>
        <button
          onClick={handleCheckOut}
          className="btn btn-success flex justify-center"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
