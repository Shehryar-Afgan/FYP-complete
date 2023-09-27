import ACTIONS from "../actions";

const initialState = {
  questionData: [],
  questionDataLoading: true,
};

export const testReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOAD_QUESTION_SUCCESS:
      return { questionData: payload, questionDataLoading: false };
    case ACTIONS.LOAD_QUESTION_FAIL:
      return { ...state, questionDataLoading: false };
    default:
      return state;
  }
};
