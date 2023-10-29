import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, name, weight, price, photo } = product;
  console.log(weight, price, photo);
  return (
    <div className="card w-80 h-90 bg-base-100 ml-10 shadow-xl">
      <figure>
        <img
          src={photo}
          className="object-cover h-48 w-96"
          alt="Fresh Grocery"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="">
          <h2 className="font-bold">Weight: {weight}</h2>
          <h3 className="font-bold">Price: {price} taka</h3>
          <div className="card-actions flex justify-center">
            <Link to={`/order/${_id}`}>
              <button className="btn btn-block btn-success mt-3">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
