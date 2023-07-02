import img1 from '../../../src/images/category.png';
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import {BASE_URL} from "../../url";

function CategoryPage() {

  const [categoryData,setCategoryData] = useState(null);
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

  if(categoryInfo){
    return (
    <>
      <Container className='categoryCard'>
        <Row>
        <h3 className='headerColor headAlign'>CATEGORIES</h3>
          {categoryInfo.map((categoryData, k) => (
              <Col key={k} xs={12} md={4} lg={3}>
                  <Link to={`/category/`+categoryData.categoryName} style={{paddingLeft: 13, textDecoration: 'none'}}>
                  <Card>
                  <Card.Img src={img1} />
                    <Card.ImgOverlay>
                      <Card.Title className='catTitle'><b>{(categoryData.categoryName).toUpperCase()}</b></Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                  </Link>
              </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
}

export default CategoryPage