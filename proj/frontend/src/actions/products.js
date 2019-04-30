import axios from "axios";
import { GET_PRODUCTS, DELETE_PRODUCT } from "./types";

export const getProducts = () => dispatch => {
  axios
    .get("/api/products/")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteProduct = id => dispatch => {
  axios
    .delete(`/api/products/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
