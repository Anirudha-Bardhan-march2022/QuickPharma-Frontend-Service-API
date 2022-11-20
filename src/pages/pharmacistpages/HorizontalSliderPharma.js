import "./HorizontalSliderPharma.css";
import { url } from "../../common/constants";
const HorizontalSliderPharma = ({ productType, onItemSelect }) => {
  return (
    <div className="container marketing container-fluid">
      <div className="row">
        {productType.map((item) => {
          return (
            <div className="col-3">
              <div
                className="productinfo"
                onClick={() => {
                  onItemSelect(item);
                }}
              >
                <img
                  src={url + "/" + item.typeThumbnail}
                  className="producttype-image"
                ></img>
                <h5>{item.producttypeName}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HorizontalSliderPharma;
