import React from 'react'
import {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BASE_URL} from "../../url";

function DisplayCategory() {
  const [postOnCatInfo,setPostInfo] = useState(null);
  const {category} = useParams();
  console.log("category", category)
  
  useEffect(() => {
    fetch(`${BASE_URL}/category/${category}`)
      .then(response => {
        response.json().then(postOnCatInfo => {
          setPostInfo(postOnCatInfo);
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
  if(postOnCatInfo){
    isPostExist = postOnCatInfo.some(
    value => { return typeof value == "object" } );
    console.log("isPostExist", isPostExist);
  }

  if(isPostExist) {
    return (
    <>
      <h3 className='headerColor'>Category : {(postOnCatInfo[0].categoryName).toUpperCase()}</h3>
      <br />
      <div className='tableStyle'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Code</th>
          <th>MRP (₹)</th>
          <th>NLC (₹)</th>
          <th>HTC BP (₹)</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {postOnCatInfo.map((arrayData,index)=>{
      return(
      <tr>
        <td>{index+1}</td>
        <td>{arrayData.productName}</td>
        <td>{arrayData.brandName}</td>
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

export default DisplayCategory
