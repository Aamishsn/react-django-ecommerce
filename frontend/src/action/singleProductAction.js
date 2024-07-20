import axios from "axios";
export const singleProductsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_REQUEST" });

    const {data} = await axios.get(
      `http://127.0.0.1:8000/api/products/${id}`
    );

    dispatch({ type: "PRODUCT_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "PRODUCT_FAIL", payload: err.message });
  }
};
