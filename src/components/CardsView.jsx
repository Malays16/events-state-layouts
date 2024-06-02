import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

const CardsView = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, index) => (
        <ShopCard key={index} data={product} />
      ))}
    </div>
  );
};

CardsView.propTypes = {
  products: PropTypes.array.isRequired
};

export default CardsView;