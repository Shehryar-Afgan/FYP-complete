import ACTIONS from "../actions/";

const initialState = {
  academics: [],
  academicsLoading: true,
};

const universityReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTIONS.ADD_ACADEMICS_SUCCESS:
    case ACTIONS.GET_ACADEMICS_SUCCESS:
    case ACTIONS.DELETE_ACADEMICS_SUCCESS:
      return {
        ...state,
        academics: payload,
        academicsLoading: false,
      };
    case ACTIONS.ADD_ACADEMICS_FAILURE:
    case ACTIONS.GET_ACADEMICS_FAILURE:
    case ACTIONS.DELETE_ACADEMICS_FAILURE:
    default:
      return state;
  }
};

export default universityReducer;
