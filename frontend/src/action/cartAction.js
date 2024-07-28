import axios from "axios";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);

  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity: qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
