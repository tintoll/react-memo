import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  font-weight : 300;
  font-size : 1.2rem;
`;

const InputPlaceholder = () => (
    <Wrapper>
      메모를 입력하세요...
    </Wrapper>
);

export default InputPlaceholder;