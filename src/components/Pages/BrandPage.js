import img1 from '../../../src/images/brand.png';
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import {BASE_URL} from "../../url";

function BrandPage() {

  const [brandData,setBrandData] = useState(null);
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

  if(brandInfo){
    return (
    <>
      <Container className='categoryCard'>
        <Row>
        <h3 className='headerColor headAlign'>BRANDS</h3>
          {brandInfo.map((brandData, k) => (
              <Col key={k} xs={12} md={4} lg={3}>
                  <Link to={`/brand/`+brandData.brandName} style={{paddingLeft: 13, textDecoration: 'none'}}><Card >
                  <Card.Img src={img1} />
                  <Card.ImgOverlay>
                      <Card.Title className='catTitle'><b>{(brandData.brandName).toUpperCase()}</b></Card.Title>
                    </Card.ImgOverlay>
                  </Card></Link>
              </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
}

export default BrandPage