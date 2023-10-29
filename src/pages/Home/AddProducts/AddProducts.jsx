import Swal from "sweetalert2";
const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const weight = form.weight.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newProduct = { name, weight, price, photo };
    console.log(newProduct);

    //sending product to the server
    fetch(
      "https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull",
            text: `${name} Added Successfully`,
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      });
  };
  return (
    <div className="bg-[#caf8bf] p-24">
      <h2 className="text-3xl font-extrabold">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        {/* form name and weight row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="weight"
                placeholder="Enter Weight"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Enter Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddProducts;
