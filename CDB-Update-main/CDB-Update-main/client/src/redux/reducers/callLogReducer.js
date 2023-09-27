import ACTIONS from "../actions";

const initialState = {
  logs: [],
  logsLoading: true,
};

export const CallLogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.CALL_LOG_SAVE_SUCCESS:
    case ACTIONS.CALL_LOG_GET_SUCCESS:
      return { ...state, logs: payload, logsLoading: false };
    case ACTIONS.CALL_LOG_SAVE_FAILURE:
    case ACTIONS.CALL_LOG_GET_FAILURE:
    default:
      return { ...state, logsLoading: true };
  }
};
