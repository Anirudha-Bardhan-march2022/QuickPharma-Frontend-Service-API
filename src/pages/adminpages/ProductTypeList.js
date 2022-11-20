import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from './../../common/constants';

const ProductTypeList = () => {
let count=1;
  const [productTypes, setProductTypes] = useState([]);
  useEffect(() => {
    getProductTypesFromDB();
  }, []);
const deleteProductTypeFromDB=(productType) =>{
  axios.delete(url + "/type/"+productType.productTypeId).then((response) => {
    const result = response.data;
    if (result.status === "success") {
      alert("product Type Deleted Successfully")
    } else {
      alert("error occured while Deleting Product Type from Database");
    }
  });
};
  const getProductTypesFromDB = () => {
    // send the GET request
    axios.get(url + "/type").then((response) => {
      const result = response.data;
      console.log(result.data)
      if (result.status === "success") {
        setProductTypes(result.data);
      } else {
        alert("error occured while getting ProductTypes");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="col admin-header1  text-dark">
          <div className="user-text">
            <div className="text-set"> 
            <h4><i><b>Product Type List </b></i></h4>
            </div>
            <br/><br/>
            <div>
              <table id="customers">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Type Name</th>
                    {/* <th scope="col">update</th> */}
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {productTypes.map((productType) => {
                    return (
                      <tr>
                        <td>{count}<input type='hidden' value={count+=1}/></td>
                        <td><img src={url + '/' + productType.typeThumbnail} className="type-image"/></td>
                        <td>{productType.producttypeName}</td>
                        {/* <td><button className="btn btn-warning btn-sm">Update</button></td> */}
                        <td><button className="btn btn-danger btn-sm"  
                        onClick={() => {
                          deleteProductTypeFromDB(productType);
                        }}>
                          Delete</button></td>
                      </tr>
                    );
                  })}
                 
                </tbody>
              </table>
              <br/><br/>
              <button className="btn btn-success" ><a href="addproducttype">Add Product Type </a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductTypeList;