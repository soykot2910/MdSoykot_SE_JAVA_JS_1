import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function AddProductPage() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState();
  const [numReviews, setNumReviews] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("numReviews", numReviews);
    formData.append("price", price);
    formData.append("countInStock", countInStock);
  };

  return (
    <div
      className="form-wrapper text-center py-5"
      style={{ width: "700px", margin: "0 auto" }}
    >
      <Container>
        <h1>Add A New Book</h1>
        <Form onSubmit={handleSubmit} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="number"
            placeholder="Enter Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="number"
            placeholder="Enter Review Number"
            value={numReviews}
            onChange={(e) => setNumReviews(e.target.value)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Control
            className="my-3"
            size="lg"
            type="number"
            placeholder="Enter Total Stock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter Book Summery"
              value={description}
              name="description"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid">
            <Button size="lg" type="sumbit">
              Add Post
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
