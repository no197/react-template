import * as types from "../constants/type";

const initialState = {
  exampleState: "",
};

const exampleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.EXAMPLE_REDUX:
      return { ...state, exampleState: action.payload };
    default:
      return state;
  }
};

export default exampleReducer;
