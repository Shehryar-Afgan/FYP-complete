import ACTIONS from "./index";
import axios from "axios";

export const saveCallLogs = (callDetails) => async (dispatch) => {
  try {
    const { token, ...rest } = callDetails;
    const config = {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    const body = JSON.stringify(rest);
    const res = await axios.post("/call/setCallLog", body, config);
    if (res.status === 200) {
      dispatch({ type: ACTIONS.CALL_LOG_SAVE_SUCCESS, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.CALL_LOG_SAVE_FAILURE });
  }
};

export const getCallLogs =
  ({ userId, token }) =>
  async (dispatch) => {
    try {
      if (userId) {
        const config = {
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + token,
          },
        };
        const body = JSON.stringify({ userId: userId });
        const res = await axios.post("/call/getCallLog", body, config);
        if (res.status === 200) {
          dispatch({ type: ACTIONS.CALL_LOG_SAVE_SUCCESS, payload: res.data });
        }
      }
    } catch (err) {
      dispatch({ type: ACTIONS.CALL_LOG_GET_FAILURE });
    }
  };
