import { Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ManageProductsRow = ({ product, handleDelete }) => {
  const { _id, name, weight, price } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{weight}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-square"
        >
          <Trash2 />
        </button>{" "}
        <Link to={`/manage/editProduct/${_id}`}>
          <button className="btn">
            <Pencil />
          </button>
        </Link>
      </td>
    </tr>
  );
};
ManageProductsRow.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ManageProductsRow;
