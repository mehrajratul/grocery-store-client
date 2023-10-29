import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const ConfirmOrder = () => {
  const product = useLoaderData();
  const { _id, name, price, weight } = product;
  console.log(product);
  const { user } = useContext(AuthContext);

  const handleOrderConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const customer_name = user?.name;
    const email = user?.email;
    const date = form.date.value;
    const order = {
      customerName: customer_name,
      email,
      date,
      product: name,
      weight: weight,
      product_id: _id,
      price: price,
    };
    console.log(order);

    fetch(
      "https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/orders",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull",
            text: `Order Confirmed`,
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      });
  };
  return (
    <div className="m-12">
      <h2 className="text-center text-3xl"> {name} </h2>
      <form onSubmit={handleOrderConfirm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="customer_name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-success "
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default ConfirmOrder;
