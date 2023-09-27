import ACTIONS from "../actions/";

const initialState = {
  user: {},
  isLogged: false,
  isAdmin: false,
  token: null,
  loading: true,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isLogged: true,
      };
    case ACTIONS.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...payload },
        token: payload.token,
        isLogged: true,
        loading: false,
        isAdmin: payload.role === 1,
      };
    case ACTIONS.REGISTER_SUCCESS:
    case ACTIONS.REGISTER_FAILURE:
    case ACTIONS.FETCH_USER_FAILURE:
    case ACTIONS.LOGIN_FAILURE:
    default:
      return state;
  }
};

export default authReducer;
