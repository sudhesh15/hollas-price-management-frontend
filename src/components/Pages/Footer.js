import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../UserContext";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About HOLLA'S PRICE LIST portal</h5>

            <p className="para">
              This portal provides you an efficient way to manage all you product prices under one roof !
              Instead of those boring excel sheet, here you create new brand, category, add new product, basically you can visualize your inventory within few steps.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Important Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/getProductOnBrandAndCategory' className='text-white'>
                  Products
                </a>
              </li>
              <li>
                <a href='/createBrand' className='text-white'>
                  Add Brand
                </a>
              </li>
              <li>
                <a href='/createCategory' className='text-white'>
                  Add Category
                </a>
              </li>
              <li>
                <a href='/create' className='text-white'>
                  Add Product
                </a>
              </li>
              <li>
                <a href='/category' className='text-white'>
                  Display Category
                </a>
              </li>
              <li>
                <a href='/brand' className='text-white'>
                  Display Brand
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Designed & Developed by Sudhesh Holla
      </div>
    </MDBFooter>
  )
}

export default Footer