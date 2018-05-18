import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import TextArea from 'react-textarea-autosize';

const TitleInput = styled.input`
  width : 100%;
  border : none;
  outline : none;
  font-weight : 500;
  font-size : 1.25rem;
`;

// 일반적인 DOM 엘리먼트가 아닌 컴포넌트를 스타일링할때는 styled(Componet)형식으로 합니다.
const StyledTextArea = styled(TextArea)`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  resize: none; /* 사용자 임의 변경 불가 */
`;



class InputSet extends Component {
  static propTypes = {
    onChange : PropTypes.func,
    title : PropTypes.string,
    body : PropTypes.string
  }

  componentDidMount() {
    // 이 컴포넌트가 화면에 나타나면 제목 인풋에 포커스를 줍니다.
    this.title.focus();
  }

  render(){
    const { onChange, title, body } = this.props;
    return(
      <div>
        <TitleInput 
              name="title"
              onChnage={onChange}
              placeholder="제목"
              innerRef={ref => this.title = ref}
              value={title}
              />
        <StyledTextArea 
              minRows={3}
              maxRows={20}
              placeholder="메모를 입력하세요..."
              name="body"
              onChange={onChange}
              value={body}
              />      

      </div>
    )
  }

}

export default InputSet;