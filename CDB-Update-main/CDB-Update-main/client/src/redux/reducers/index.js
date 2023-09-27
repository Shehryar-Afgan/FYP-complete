import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { testReducer } from "./testReducer";
import { resultReducer } from "./resultReducer";
import { CallLogReducer as calllogReducer } from "./callLogReducer";
import { standingsReducer } from "./standingsReducer";
import universityReducer from "./universityReducer";
import academicsReducer from "./academicsReducer";

export default combineReducers({
  authReducer,
  testReducer,
  calllogReducer,
  resultReducer,
  standingsReducer,
  universityReducer,
  academicsReducer,
});
