import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../products";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import img from "../../public/images/camera.jpg";
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
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
            {/* <ListGroup.Item>
              <RatingsProducts
                rating={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>${product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{product.description}</p>
            </ListGroup.Item> */}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
