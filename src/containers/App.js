import React, { Component } from 'react';
import Header from "components/Header";
import Layout from "components/Layout";
import WriteMemo from "./WriteMemo";
import MemoListContainer from "./MemoListContainer";
import MemoViewerContainer from "./MemoViewerContainer";

import { connect  } from "react-redux";
import * as memoActions from 'modules/memo';
import { bindActionCreators } from "redux";

class App extends Component {

  _endCursor = 0;

  async componentDidMount() {
    // 이벤트 등록
    window.addEventListener('scroll', this.handleScroll);
    
    const { MemoActions } = this.props;
    // 초기 메모 로딩
    try {
      await MemoActions.getInitialMemo();
      this.getRecentMemo();
    } catch(e) {
      console.log(e);
    }
    
  }

  handleScroll = (e) => {
    const { clientHeight } = document.body;
    const { innerHeight } = window;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(clientHeight, innerHeight, scrollTop); // 2277 407 1870

    if((clientHeight - innerHeight - scrollTop) < 100) {
      
      // console.log('페이지 끝에 다가오네요');
      /*
       무작정 로딩을 하면 안됩니다. 
       왜냐하면 이 이벤트 리스너는 스크롤을 할 때마다 호출을 하기 때문에 중복 요청이 될 가능성이 있습니다. 
       따라서, 중복로딩을 방지하는 간단한 규칙을 만들어야 합니다.
      */
     const {endCursor, MemoActions } = this.props;
     // endCursor가 없거나, 이전에 했던 요청과 동일하다면 여기서 멈춘다. 
     if(!endCursor || this._endCursor === endCursor) return;
     this._endCursor = endCursor;

     MemoActions.getPreviousMemo(endCursor);
    }
  }

  getRecentMemo = () =>{
    const { MemoActions, cursor} = this.props;
    MemoActions.getRecentMemo(cursor ? cursor : 0);

    // short-polling -5초 마다 새 데이터 불러오기
    setTimeout(() => {
      this.getRecentMemo()
    }, 1000 * 5);
  }

  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Main>
            <WriteMemo />
            <MemoListContainer />
          </Layout.Main>
          <MemoViewerContainer />
        </Layout>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cursor : state.memo.getIn(['data',0,'id']),
    endCursor : state.memo.getIn(['data', state.memo.get('data').size - 1, 'id'])
  }), 
  (dispatch) => ({
    MemoActions : bindActionCreators(memoActions, dispatch)
  })

)(App);
