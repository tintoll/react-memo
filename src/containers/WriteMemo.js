import React, { Component } from 'react';
import { InputPlaceholder, WhiteBox } from "components/WriteMemo";
import { InputSet, SaveButton } from "components/Shared";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as uiActions from 'modules/ui';
import * as memoActions from 'modules/memo';
import enhanceWithClickOutside from "react-click-outside";

class WriteMemo extends Component {
  handleFocus = () => {
    const { focused, UIActions } = this.props;

    // 포커스 된 상태가 아닐 때만 실행합니다.
    if (!focused) {
      UIActions.focusInput();
    }
  };

  // enhanceWithClickOutside를 사용하면 무조건 이함수이름으로 호출이 됨.
  handleClickOutside = () => {
    const { focused, UIActions, title, body } = this.props;

    if (focused) {
      if (title !== "" || body !== "") return; // 만약에 title 이나 body 가 비어있지 않다면 유지시킨다
      UIActions.blurInput();
    }
  };

  handleChange = (e) => {
    const { UIActions }= this.props;
    const {name, value} = e.target;
    UIActions.changeInput({name,value});
  }

  handleCreate = async () => {
    const { title, body, MemoActions, UIActions } = this.props;
    try {

      await MemoActions.createMemo({
        title, body
      });
    }catch(e){
      console.log(e);
    }
  }

  render() {
    const { handleFocus, handleChange, handleCreate } = this;
    const { focused, title, body } = this.props;
    return focused ? (
      <WhiteBox>
        <InputSet onChange={handleChange} title={title} body={body} />
        <SaveButton onClick={handleCreate}/>
      </WhiteBox>
    ) : (
      <WhiteBox onClick={handleFocus}>
        <InputPlaceholder />
      </WhiteBox>
    );
  }
}

export default connect(
  state => ({
    focused: state.ui.getIn(["write", "focused"]),
    title: state.ui.getIn(["write", "title"]),
    body: state.ui.getIn(["write", "body"])
  }),
  dispatch => ({
    UIActions: bindActionCreators(uiActions, dispatch),
    MemoActions : bindActionCreators(memoActions, dispatch)
  })
)(enhanceWithClickOutside(WriteMemo));