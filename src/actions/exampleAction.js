import * as types from "../constants/type";

export const exampleReduxAction = () => dispatch => {
  console.log("example actions");

  dispatch({
    type: types.EXAMPLE_REDUX,
    payload: "Example Redux",
  });
};
