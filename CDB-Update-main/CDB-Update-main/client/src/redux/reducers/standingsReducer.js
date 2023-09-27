import ACTIONS from "../actions";

const initialState = {
  testStandings: [],
  testStandingsLoading: true,
};

export const standingsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOAD_TEST_STANDINGS_SUCCESS:
      return { testStandings: payload, testStandingsLoading: false };
    case ACTIONS.LOAD_TEST_STANDINGS_FAILURE:
      return { ...state, testStandingsLoading: true };
    default:
      return state;
  }
};
