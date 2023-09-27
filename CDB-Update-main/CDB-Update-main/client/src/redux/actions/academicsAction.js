import ACTIONS from "./index";
import axios from "axios";

export const addAcademics =
  ({ token, fullName, matricMarks, school, fscMarks, college }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      const res = await axios.post(
        "/academics/add-academics",
        { fullName, matricMarks, school, fscMarks, college },
        {
          headers: { authorization: `Bearer ${userToken}` },
          "content-type": "application/json",
        }
      );
      if (res.data) {
        dispatch({
          type: ACTIONS.ADD_ACADEMICS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ACTIONS.ADD_ACADEMICS_FAILURE,
      });
    }
  };

export const getAcademics =
  ({ token }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      if (userToken) {
        const res = await axios.get("/academics/get-academics", {
          headers: { authorization: `Bearer ${userToken}` },
        });
        dispatch({
          type: ACTIONS.GET_ACADEMICS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.GET_ACADEMICS_FAILURE,
      });
    }
  };

export const deleteAcademics =
  ({ token, id }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      if (userToken) {
        const res = await axios.get(`/academics/delete-academics/${id}`, {
          headers: { authorization: `Bearer ${userToken}` },
        });
        dispatch({
          type: ACTIONS.DELETE_ACADEMICS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.DELETE_ACADEMICS_FAILURE,
      });
    }
  };
