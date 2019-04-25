import jsonPlaceHolder from "../api/jsonPlaceHolder";
//import _ from "lodash";

export const fetchPostsAndUsers = () => async dispatch => {
  dispatch(fetchPost());
};

export const fetchPost = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
