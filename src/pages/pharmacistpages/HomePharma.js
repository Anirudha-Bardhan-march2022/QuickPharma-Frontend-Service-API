//import HorizontalSlider from "./../component/HorizontalSlider";
import HorizontalSlider from "../../component/HorizontalSlider";
import "./HomePharma.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../common/constants";
import { useHistory } from "react-router-dom";

const HomePharma = () => {
  const [productType, setProductType] = useState([]);
  const history = useHistory();
  const email = localStorage.getItem("email");

  useEffect(() => {
    getProductTypes();
  }, []);

  const getProductTypes = () => {
    axios.get(url + "/type").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setProductType(result.data);
      } else {
        alert("error occured while getting Types of Products");
      }
    });
  };

  const getProductByProductType = (productType) => {
    axios
      .get(url + "/product/type/" + productType.productTypeId)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          history.push("/products", {
            productlist: result.data,
            typeName: productType.type_name,
          });

          if (email != null) {
            history.push("/productspharma", {
              productlist: result.data,
              typeName: productType.type_name,
            });
          } else {
            history.push("/products", {
              productlist: result.data,
              typeName: productType.type_name,
            });
          }
        } else {
          alert("error occured while getting  Products");
        }
      });
  };

  return (
    <div className="overflow home-bg-image">
      <div>
        <HorizontalSlider
          productType={productType}
          onItemSelect={getProductByProductType}
        />
      </div>
    </div>
  );
};
export default HomePharma;
