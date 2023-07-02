import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import {BASE_URL} from "../../url";

function EditProduct() {
  const [categoryData,setCategoryData] = useState('');
  useEffect(() => {
    fetch(`${BASE_URL}/category`)
      .then(response => {
        response.json().then(categoryData => {
          setCategoryData(categoryData);
        });
      });
  }, []);

  let categoryInfo;
  if(categoryData != null){
    categoryInfo = categoryData;
  }

  const [brandData,setBrandData] = useState('');
  useEffect(() => {
    fetch(`${BASE_URL}/brand`)
      .then(response => {
        response.json().then(brandData => {
          setBrandData(brandData);
        });
      });
  }, []);

  let brandInfo;
  if(brandData != null){
    brandInfo = brandData;
  }

  let handleBrandChange = (e) => {
    setBrandName(e.target.value);
  };

  let handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };
  const {id} = useParams();
  const [productName,setProductName] = useState('');
  const [productCode,setproductCode] = useState('');
  const [productMrp,setproductMrp] = useState('');
  const [productNlc,setproductnLC] = useState('');
  const [productHtcBp,setproductHtcBp] = useState('');
  const [brandName,setBrandName] = useState('');
  const [categoryName,setCategoryName] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function updateProduct(ev){
    const data = new FormData();
    data.set('productName', productName);
    data.set('productCode', productCode);
    data.set('productMrp', productMrp);
    data.set('productNlc', productNlc);
    data.set('productHtcBp', productHtcBp);
    data.set('brandName', brandName);
    data.set('categoryName', categoryName);
    data.set('id', id);
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/post`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
     setRedirect(true);
    }
  }

  useEffect(() => {
    fetch(`${BASE_URL}/product/`+id)
      .then(response => {
        response.json().then(productData => {
          setProductName(productData.productName);
          setproductCode(productData.productCode);
          setproductMrp(productData.productMrp);
          setproductnLC(productData.productNlc);
          setproductHtcBp(productData.productHtcBp);
          setBrandName(productData.brandName);
          setCategoryName(productData.categoryName);
        });
      });
  }, []);

  if (redirect) {
    return <Navigate to={'/'} />
  }

  if(categoryInfo && brandInfo){
  return (
    <form onSubmit={updateProduct}>
    <div className="postForm">
      <h2 style={{color: "#5f5f5f"}}>EDIT PRODUCT</h2>
      <hr/>
      <input type="productName" placeholder={'PRODUCT NAME'} value={productName} onChange={ev => setProductName(ev.target.value)} required/>
      <input type="productCode" placeholder={'CODE'} value={productCode} onChange={ev => setproductCode(ev.target.value)} />
      <input type="productMrp" placeholder={'MRP'} value={productMrp} onChange={ev => setproductMrp(ev.target.value)} />
      <input type="productNlc" placeholder={'NLC'} value={productNlc} onChange={ev => setproductnLC(ev.target.value)} />
      <input type="productHtcBp" placeholder={'HTV BP'} value={productHtcBp} onChange={ev => setproductHtcBp(ev.target.value)} />
      <select onChange={handleBrandChange} value={brandName}>
        <option value="Select Brand"> -- Select Brand -- </option>
        {brandInfo.map((item) => (
          <option value={item.brandName}>{item.brandName}</option>
        ))}
      </select>
      <select onChange={handleCategoryChange} value={categoryName}>
        <option value="Select Category"> -- Select Category -- </option>
        {categoryInfo.map((item) => (
          <option value={item.categoryName}>{item.categoryName}</option>
        ))}
      </select>
      <button className="createPost" style={{marginTop:'5px'}}>UPDATE PRODUCT</button>
      </div>
    </form>
  )
}
}

export default EditProduct