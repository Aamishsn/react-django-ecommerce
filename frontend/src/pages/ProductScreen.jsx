import axios from 'axios'
import { useParams, useNavigate, Link } from "react-router-dom";
// import products from "../products";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import RatingsProducts from "../component/RatingsProducts";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {singleProductsAction} from "../action/singleProductAction"
const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.singleProduct);
  const { error, loading, product } = singleProduct;
  useEffect(() => {
    dispatch(singleProductsAction(id));

  },[])
  // const product = products.find((p) => p._id === id);
  return (
    <>
      <Link
        to={"/"}
        className="btn btn-light my-3 border border-1 border-dark "
      >
        Go Back
      </Link>
      {/* <img src={product.image} alt="sjh" /> */}
      <Row>
        <Col md={6}>
          <div
            style={{ overflow: "hidden" }}
            className="border border-1 border-dark "
          >
            <img
              src={product.image}
              alt="asd"
              className="img-fluid prod-img"
              style={{ width: "100%" }}
            />
          </div>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>

            <ListGroup.Item>
              <RatingsProducts
                rating={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>price: ${product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col md={4}>Price:</Col>
                  <Col md={8} style={{ textAlign: "center" }}>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={4}>Status:</Col>
                  <Col md={8} style={{ textAlign: "center" }}>
                    {product.countInStock > 0
                      ? `${product.countInStock} Items in Stock`
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <Button
                className="list-group-item"
                disabled={product.countInStock === 0}
                style={{ backgroundColor: "black", color: "white" }}
                type="button"
              >
                Add To Cart
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
