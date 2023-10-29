import { useContext, useEffect, useState } from "react";
import ManageProductsRow from "./ManageProductsRow";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setProducts(data);
        } else {
          navigate("/");
        }
      });
  }, [navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure?");
    if (proceed) {
      fetch(
        `https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Successfull",
              text: `Product Deleted`,
              icon: "Success",
              confirmButtonText: "Continue",
            });
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-5xl flex justify-center my-16">
        Manage Products: {products.length}
      </h2>
      <div className="overflow-x-auto ml-32">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageProductsRow
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></ManageProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
