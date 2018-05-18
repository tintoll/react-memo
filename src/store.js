import { createStore, applyMiddleware, compose } from "redux";
import penderMiddleware from "redux-pender";

import reducers from 'modules';

// 미들웨어와 개발도구를 함께 사용하기 위하여, compose 가 사용됩니다.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// React DevTool 과 redux-pender 를 적용하여 스토어를 만들었습니다
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(penderMiddleware())
));

export default store;

