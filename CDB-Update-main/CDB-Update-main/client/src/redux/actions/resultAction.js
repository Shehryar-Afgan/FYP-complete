import ACTIONS from "./index";
import axios from "axios";

export const addResult = (result, token) => async (dispatch) => {
  try {
    if (result && token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const body = JSON.stringify(result);
      const res = await axios.post("/results/set", body, config);
      dispatch({ type: ACTIONS.ADD_RESULT_SUCCESS, payload: res.data._doc });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.ADD_RESULT_FAILURE, payload: err });
  }
};

export const getLatestResult = (token) => async (dispatch) => {
  try {
    if (token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get("/results/get", config);
      console.log(res.data);
      dispatch({ type: ACTIONS.GET_RESULT_SUCCESS, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.GET_RESULT_FAILURE, payload: err });
  }
};
