import ACTIONS from "../actions/";

const initialState = {
  universities: [],
  universityLoading: true,
};

const universityReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTIONS.ADD_UNIVERSITY_SUCCESS:
    case ACTIONS.GET_UNIVERSITY_SUCCESS:
    case ACTIONS.DELETE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        universities: payload,
        universityLoading: false,
      };
    case ACTIONS.ADD_UNIVERSITY_FAILURE:
    case ACTIONS.GET_UNIVERSITY_FAILURE:
    case ACTIONS.DELETE_UNIVERSITY_FAILURE:
    default:
      return state;
  }
};

export default universityReducer;
