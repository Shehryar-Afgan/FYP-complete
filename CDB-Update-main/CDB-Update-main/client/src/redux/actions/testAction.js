import ACTIONS from "./index";
import axios from "axios";


export const loadEnglishQuestions = (token) => async (dispatch) => {
  try {
    if (token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get("/questions/generateenglish", config);
      dispatch({ type: ACTIONS.LOAD_QUESTION_SUCCESS, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.LOAD_QUESTION_FAIL, payload: err });
  }
};

export const loadQuestions = (token) => async (dispatch) => {
  try {
    if (token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get("/questions/generate", config);
      dispatch({ type: ACTIONS.LOAD_QUESTION_SUCCESS, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.LOAD_QUESTION_FAIL, payload: err });
  }
};

export const addQuestionsBulkRequest =
  (questions, token) => async (dispatch) => {
    try {
      if (token) {
        const config = {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        };
        const body = JSON.stringify({ questions: questions });
        console.log(body, token);
        const res = await axios.post(
          "/questions/add-questions-bulk",
          body,
          config
        );
        console.log(res);
        dispatch({ type: ACTIONS.SAVE_QUESTIONS_SUCCESS });
      }
    } catch (err) {
      dispatch({ type: ACTIONS.SAVE_QUESTIONS_FAILURE });
    }
  };

export const addSingleQuestion = (formData, token) => async (dispatch) => {
  try {
    if (token) {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const body = JSON.stringify(formData);
      console.log(body, token);
      const res = await axios.post("/questions/set", body, config);
      console.log(res);
      dispatch({ type: ACTIONS.SAVE_QUESTIONS_SUCCESS });
    }
  } catch (err) {
    dispatch({ type: ACTIONS.SAVE_QUESTIONS_FAILURE });
  }
};
