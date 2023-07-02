import React from 'react';
import {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BASE_URL} from "../../url";

function DisplayBrand() {
  const [postOnBrandInfo,setPostInfo] = useState(null);
  const {brand} = useParams();
  
  useEffect(() => {
    fetch(`${BASE_URL}/brand/${brand}`)
      .then(response => {
        response.json().then(postOnBrandInfo => {
          setPostInfo(postOnBrandInfo);
        });
      });
  }, []);

  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`${BASE_URL}/deleteProduct/${productId}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          alert('Product deleted successfully');
          window.location.reload();
        } else {
          alert('Failed to delete the product');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  var isPostExist = false;
  if(postOnBrandInfo){
    isPostExist = postOnBrandInfo.some(
    value => { return typeof value == "object" } );
  }

  if(isPostExist) {
    return (
    <>
      <h3 className='headerColor'>Brand : {(postOnBrandInfo[0].brandName).toUpperCase()}</h3>
      <br />
      <div className='tableStyle'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Code</th>
          <th>MRP (₹)</th>
          <th>NLC (₹)</th>
          <th>HTC BP (₹)</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {postOnBrandInfo.map((arrayData,index)=>{
      return(
      <tr>
        <td>{index+1}</td>
        <td>{arrayData.productName}</td>
        <td>{arrayData.categoryName}</td>
        <td>{arrayData.productCode}</td>
        <td>{(arrayData.productMrp).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
        <td>{(arrayData.productNlc).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
        <td>{(arrayData.productHtcBp).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
        <td ><i className='editClass'><Link to={`/edit/${arrayData._id}`}>EDIT</Link></i></td>
        <td ><i className='deleteClass' onClick={() => deleteProduct(arrayData._id)}>DELETE</i></td>
      </tr>
      )
      }
      )}
  </tbody>
    </Table>
    </div>
    </>
  )
    }
}

export default DisplayBrand
