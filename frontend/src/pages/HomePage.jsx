import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import SinglePorduct from "../component/SinglePorduct";
import axios from "axios"
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(response.data)
    }

    fetchProducts()

  },[])
  return (
    <>
      <h1> LATEST PRODUCTS</h1>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <SinglePorduct product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
