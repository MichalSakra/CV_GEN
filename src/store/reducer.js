import * as actionTypes from "./actionTypes";

const initialState = {
  test: "text",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FORM_DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
