
import { useLocation } from 'react-router-dom';
import ProductSlider from './../component/ProductSlider';
const SearchProducts = () => {
    const location=useLocation()
    const products=location.state.products
  return (
    <div className="all-product-bg-image container-fluid">
      <br/>
      <div className="row">
        
        {products.map((product) => {
          return (
            <div className="col-3"><ProductSlider product={product} /></div>
          );
        })}
      </div>
      <br/>
    </div>
  );
};
export default SearchProducts;
