import React from "react";
import { Card } from "react-bootstrap";
import RatingsProducts from "./RatingsProducts";
import { Link } from "react-router-dom";
const SinglePorduct = ({ product }) => {
  return (
    <>
      <Card border="secondary" className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <div style={{ overflow: "hidden" }}>
            <Card.Img className="img-pro" variant="top" src={product.image} />
          </div>
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h4">${product.price}</Card.Text>
          <Card.Text as="div">
            <RatingsProducts
              rating={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
            {/* {product.rating} from {product.numReviews} reviews */}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SinglePorduct;
