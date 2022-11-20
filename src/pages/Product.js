import ProductSlider from "../component/ProductSlider";
import "./Product.css";
import {  useLocation } from 'react-router-dom';

const Product = () => {
    const location=useLocation()
    const productlist = location.state.productlist
  return (
    <div className="container-fluid slider-container product-bg-image">
      <div className="text-center"><h1>{location.state.typeName}</h1></div>
      <div className="row">
      {productlist.map((product) => {
        return(<div className="col-3"><ProductSlider product={product} /></div>);
      })}
      </div>
    </div>
  );
};

export default Product;
