import React from 'react';
import {useEffect, useState, useContext} from "react";
import {UserContext} from "../../UserContext";
import { MDBDataTable } from 'mdbreact';
import {BASE_URL} from "../../url";

function ProductsPage() {

  const [productInfo,setproductInfo] = useState(null);
  
  useEffect(() => {
    fetch(`${BASE_URL}/getProductOnBrandAndCategory/`)
      .then(response => {
        response.json().then(productInfo => {
          setproductInfo(productInfo);
        });
      });
  }, []);

    const data = {
      columns: [
        {
          label: 'Product Name',
          field: 'productName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Code',
          field: 'productCode',
          sort: 'asc',
          width: 270
        },
        {
          label: 'MRP (₹)',
          field: 'productMrp',
          sort: 'asc',
          width: 200
        },
        {
          label: 'NLC (₹)',
          field: 'productNlc',
          sort: 'asc',
          width: 100
        },
        {
          label: 'HTC BP (₹)',
          field: 'productHtcBp',
          sort: 'asc',
          width: 150
        }
      ],
      rows: productInfo
    };

    return (
      <><MDBDataTable
      paging={true}
      data={data}
    />
      </>
    );
}

export default ProductsPage;