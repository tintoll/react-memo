import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/style-util';
import Memo from './Memo';
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display : block;
  margin-top : 0.5rem;
  font-size : 0px; /* inline-block 위아래 사이에 생기는 여백을 제거합니다. */
  ${media.mobile`
    margin-top : 0.25rem;
  `}
`;

const MemoList = ({memos, onOpen}) => {

  const memoList = memos.map(
    memo => (
      <Memo key={memo.get('id')}
            memo={memo}
            onOpen={onOpen}
            />
    )
  );

  return (
    <Wrapper>
      {memoList}
    </Wrapper>
  )

};

MemoList.propTypes = {
  memos : ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id : PropTypes.number,
      title : PropTypes.string,
      body : PropTypes.body
    })
  )
}

export default MemoList;