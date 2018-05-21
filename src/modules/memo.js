// 리덕스 모듈 추가  - 데이터 부분을 담당
import { handleActions } from "redux-actions";
import { Map, List, fromJS } from "immutable";
import * as WebAPI from 'lib/web-api';
import createAction from "redux-actions/lib/createAction";
import { pender } from "redux-pender";


const CREATE_MEMO = 'memo/CREATE_MEMO';
const GET_INITIAL_MEMO = 'memo/GET_INITIAL_MEMO';
const GET_RECENT_MEMO = 'memo/GET_RECENT_MEMO';

export const createMemo = createAction(CREATE_MEMO, WebAPI.createMemo); //{title, body}
export const getInitialMemo = createAction(GET_INITIAL_MEMO, WebAPI.getInitialMemo);
export const getRecentMemo = createAction(GET_RECENT_MEMO, WebAPI.getRecentMemo); // cursor

const initialState = Map({
  data : List()
});

export default handleActions({
  // 초기 메모 로딩
  ...pender({
    type:GET_INITIAL_MEMO,
    onSuccess : (state,action) => state.set('data',fromJS(action.payload.data))
  }),
  // 신규 메모 로딩
  ...pender({
    type : GET_RECENT_MEMO,
    onSuccess : (state,action) => {
      // 데이터 리스트의 앞 부분에 새 데이터를 붙여준다.
      const data = state.get('data');
      // concat은 새로운 배열을 리턴하기때문에 a.concat(b) 하면 a먼저 배열에넣고 다음에 b를 배열에 넣음.
      return state.set('data', fromJS(action.payload.data).concat(data));
    }
  }) 

}, initialState);