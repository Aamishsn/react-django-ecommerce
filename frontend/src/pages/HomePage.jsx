import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import SinglePorduct from "../component/SinglePorduct";
import { useSelector, useDispatch } from "react-redux";
import { listProductsAction } from "../action/productActions";
const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProductsAction);
  }, [dispatch]);

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <h1> LATEST PRODUCTS</h1>
          <Row className="justify-content-center">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <SinglePorduct product={product} />
              </Col>
            ))}
          </Row>{" "}
        </>
      )}
    </>
  );
};

export default HomePage;
