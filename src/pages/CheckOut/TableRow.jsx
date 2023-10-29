import PropTypes from "prop-types";
const TableRow = ({ order }) => {
  const { product, price, weight } = order;
  console.log(order);
  return (
    <tr>
      <td>{product}</td>
      <td>{weight}</td>
      <td>{price}</td>
      <td></td>
    </tr>
  );
};
TableRow.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
