import React from "react";
import { useEffect } from "react";
import {
  useSearchParams,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../action/cartAction";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
const CartPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  console.log(id);
  const qty = searchParams.get("qty");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    navigate("/shipping");
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Shopping Cart</h1>
      </div>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={3}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col
                    md={3}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      to={`/product/${item.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item.name}
                    </Link>
                  </Col>
                  <Col
                    md={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    ${item.price}
                  </Col>

                  <Col
                    md={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(addToCart(item.id, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </Col>

                  <Col
                    md={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="button"
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce(
                    (acc, item) => acc + Number(item.quantity),
                    0
                  )}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
            <Button
              // className="list-group-item"
              disabled={cartItems.length === 0}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
              type="button"
              onClick={checkOutHandler}
            >
              Poceed to Check Out
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartPage;
