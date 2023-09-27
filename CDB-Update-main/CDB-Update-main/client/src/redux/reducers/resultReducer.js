import ACTIONS from "../actions";

const initialState = {
  category: [],
  total: 0,
  obtained: 0,
  datetime: null,
  resultLoading: true,
};

export const resultReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.GET_RESULT_SUCCESS:
    case ACTIONS.ADD_RESULT_SUCCESS:
      return {
        ...state,
        category: payload.category,
        total: payload.total,
        obtained: payload.obtained,
        datetime: payload.datetime,
        resultLoading: false,
      };
    case ACTIONS.GET_RESULT_FAILURE:
    case ACTIONS.ADD_RESULT_FAILURE:
    default:
      return { ...state, resultLoading: true };
  }
};
