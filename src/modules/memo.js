// 리덕스 모듈 추가  - 데이터 부분을 담당
import { handleActions } from "redux-actions";
import { Map } from "immutable";

const initialState = Map({

});

export default handleActions({

}, initialState);