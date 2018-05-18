import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import memo from "./memo";
import ui from "./ui";

// 리듀서들을 합쳐주는데 penderReducer와 같이 합쳐줍니다.
export default combineReducers({
  memo,
  ui,
  pender : penderReducer
});