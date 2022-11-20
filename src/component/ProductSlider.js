import "./ProductSlider.css";
import { url } from "./../common/constants";
import { useHistory } from "react-router-dom";

const ProductSlider = ({ product }) => {
  const history = useHistory();
  const email = localStorage.getItem("email");
  
  const onSelectProduct = () => {
    if (email != null) {
      history.push("/productdetailsuser", {
        item: product,
      });
    } else {
      history.push("/productdetails", {
        item: product,
      });
    }
  };
  return (
    <div className="container marketing container-fluid">
      <div className="product-div">
        <div className="">
          <center>
            <div
              className=""
              onClick={(product) => {
                onSelectProduct(product);
              }}
            >
              <img
                src={url + "/" + product.productThumbnail}
                className="product-image image-thumbnail"
              ></img>
              <h5>{product.productName}</h5>

              <h6>Price : Rs.{product.price}</h6>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};
export default ProductSlider;
