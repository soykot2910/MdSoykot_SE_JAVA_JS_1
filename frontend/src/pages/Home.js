import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { listProducts, listTopProducts } from "../actions/productActions";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productTopRated = useSelector((state) => state.productTopRated);
  const { products: topRatedProducts } = productTopRated;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listTopProducts());
  }, []);

  return (
    <div className="homePage py-5">
      <Container>
        <h1>All Product</h1>
        <Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            products.map((product) => (
              <Col lg={3} md={4} sm={6} className="my-2">
                <Card className="text-center">
                  <Card.Img
                    variant="top"
                    height="200"
                    width="100"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {product.name}
                    </Card.Title>
                    <p>Category: {product.category}</p>
                    <h4>{product.price} Taka</h4>
                    <button className="btn btn-info w-100">Add to cart</button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <Row>
          <h1 className="py-3">Top Products</h1>
          <Row>
            {topRatedProducts.map((product) => (
              <Col lg={3} md={4} sm={6} className="my-2">
                <Card className="text-center">
                  <Card.Img
                    variant="top"
                    height="200"
                    width="100"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {product.name}
                    </Card.Title>
                    <p>Category: {product.category}</p>
                    <h4>{product.price} Taka</h4>
                    <button className="btn btn-info w-100">Add to cart</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
