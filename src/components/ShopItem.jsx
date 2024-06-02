import PropTypes from 'prop-types';

const ShopItem = ({ data }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={data.img} alt={data.name} />
      </div>
      <h2 className="product-name">{data.name}</h2>
      <div className="product-color">{data.color}</div>
      <div className="product-price">${data.price}</div>
      <button type="button" className="product-button">Add to cart</button>
    </div>
  );
};

ShopItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ShopItem;