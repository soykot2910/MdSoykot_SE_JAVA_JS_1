import React, { useState, useEffect } from "react";
import axios from "axios";
import TextTruncate from "react-text-truncate";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilSquare, Trash, Plus } from "react-bootstrap-icons";
import ReactPaginate from "react-paginate";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  const productsPerPage = 10;
  const pageVisited = pageNumber * productsPerPage;

  const displayProducts = products
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <TextTruncate
            line={1}
            element="span"
            truncateText=".."
            text={product.title}
          />
        </td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td>
          <Link to={`/admin/product/${product.id}/edit`}>
            <Button variant="light" className="btn-sm">
              <PencilSquare />
            </Button>
          </Link>
          <Button
            variant="danger"
            className="btn-sm"
            onClick={() => deleteHandler(product._id)}
          >
            <Trash />
          </Button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      //
    }
  };

  return (
    <div className="product py-5">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className="text-right">
            <a className="my-3 btn btn-secondary" href="product/new">
              <Plus /> Create Product
            </a>
          </Col>
        </Row>

        <Table striped bordered hover responsive className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Productlist;
