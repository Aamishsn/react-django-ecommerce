import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import SinglePorduct from "../component/SinglePorduct";

const HomePage = () => {

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
