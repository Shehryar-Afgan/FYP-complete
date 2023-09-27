import ACTIONS from "./index";
import axios from "axios";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const addUniversity =
  ({ token, name, merit, speciality, city, universityPage }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      const res = await axios.post(
        "/university/add-university",
        { name, merit, speciality, city, universityPage },
        {
          headers: { authorization: `Bearer ${userToken}` },
          "content-type": "application/json",
        }
      );
      if (res.data) {
        dispatch({
          type: ACTIONS.ADD_UNIVERSITY_SUCCESS,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ACTIONS.ADD_UNIVERSITY_FAILURE,
      });
    }
  };

export const getUniversities =
  ({ token }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      if (userToken) {
        const res = await axios.get("/university/get-university", {
          headers: { authorization: `Bearer ${userToken}` },
        });
        dispatch({
          type: ACTIONS.GET_UNIVERSITY_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.GET_UNIVERSITY_FAILURE,
      });
    }
  };

export const deleteUniversity =
  ({ token, id }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem("token");
      if (userToken) {
        const res = await axios.get(`/university/delete-university/${id}`, {
          headers: { authorization: `Bearer ${userToken}` },
        });
        dispatch({
          type: ACTIONS.DELETE_UNIVERSITY_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.DELETE_UNIVERSITY_FAILURE,
      });
    }
  };
