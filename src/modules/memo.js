// 리덕스 모듈 추가  - 데이터 부분을 담당
import { handleActions } from "redux-actions";
import { Map } from "immutable";
import * as WebAPI from 'lib/web-api';
import createAction from "redux-actions/lib/createAction";


const CREATE_MEMO = 'memo/CREATE_MEMO';

export const createMemo = createAction(CREATE_MEMO, WebAPI.createMemo); //{title, body}


const initialState = Map({

});

export default handleActions({

}, initialState);