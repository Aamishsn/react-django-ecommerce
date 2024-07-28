import React from "react";
import { useEffect } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/cartAction";
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

  return (
    <>
      Cart Page
      <h1>
        {id} {qty}
      </h1>
    </>
  );
};

export default CartPage;
