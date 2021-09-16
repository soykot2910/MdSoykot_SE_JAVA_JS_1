import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../actions/productActions";
import axios from "axios";

export default function AddProductPage() {
  let history = useHistory();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [rating, setRating] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("price", price);
    if (dispatch(createProduct(formData))) {
      history.push("/products");
    }
  };

  return (
    <div
      className="form-wrapper text-center py-5"
      style={{ width: "700px", margin: "0 auto" }}
    >
      <Container>
        <h1>Add New Product</h1>
        <Form onSubmit={handleSubmit} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter  Product Name"
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
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder=" Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div className="mb-3 form-control">
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter description"
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
