import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

const ListView = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((item, index) => (
        <ShopItem key={index} data={item} />
      ))}
    </div>
  );
};

ListView.propTypes = {
  products: PropTypes.array.isRequired
};

export default ListView;