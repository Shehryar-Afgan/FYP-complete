import ACTIONS from "./index";
import axios from "axios";

export const loadTestStandings = (token) => async (dispatch) => {
  try {
    if (token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get("/results/test-standings", config);
      console.log(res);
      dispatch({
        type: ACTIONS.LOAD_TEST_STANDINGS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.LOAD_TEST_STANDINGS_FAILURE, payload: err });
  }
};
