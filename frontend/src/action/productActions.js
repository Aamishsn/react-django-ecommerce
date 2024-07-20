import axios from "axios";
export const listProductsAction = async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get("http://127.0.0.1:8000/api/products/");

    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "PRODUCT_LIST_FAIL", payload: err.message });
  }
};
