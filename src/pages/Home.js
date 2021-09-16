import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  return (
    <div className="homePage py-5">
      <Container>
        <Row>
          {products.map((product) => (
            <Col lg={3} md={4} sm={6} className="my-2">
              <Card>
                <Card.Img
                  variant="top"
                  height="200"
                  width="100"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {product.title}
                  </Card.Title>
                  <h4>{product.price} Taka</h4>
                  <button className="btn btn-info w-100">Add to cart</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
