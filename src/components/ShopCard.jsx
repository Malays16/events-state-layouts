import PropTypes from 'prop-types';

const ShopCard = ({ data }) => {
  console.log(data);
  return (
    <div className="product">
      <h2 className="product-name">{data.name}</h2>
      <div className="product-color">{data.color}</div>
      <div className="product-image">
        <img src={data.img} alt="{data.name}" />
      </div>
      <div className="product-footer">
        <div className="product-price">${data.price}</div>
        <button type="button" className="product-button">Add to cart</button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ShopCard;