import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

export default function ProductEdit({ match, history }) {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [rating, setRating] = useState();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/products");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setImage(product.image);
        setPrice(product.price);
        setCategory(product.category);
        setRating(product.rating);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        rating,
        description,
      })
    );
  };

  return (
    <div className="form-wrapper text-center py-5">
      <Container>
        <h1>Update Product</h1>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} className="input-form">
            <Form.Control
              className="my-3"
              size="lg"
              type="text"
              placeholder="Enter Product Name"
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
              placeholder="Enter Categgory Name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                value={description}
                name="description"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid">
              <Button size="lg" type="sumbit">
                Update
              </Button>
            </div>
          </Form>
        )}
      </Container>
    </div>
  );
}
