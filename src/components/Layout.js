import React from 'react';
import styled from 'styled-components';
import { media } from "lib/style-util";

const Wrapper = styled.div`
  padding-top:60px;/*헤더 높이*/
`;

const Layout = ({children}) => (
    <Wrapper>
      {children}
    </Wrapper>
);

// Layout 컴포넌트에 멤버변수를 만들어서 Main 컴포넌트를 만들어보자
Layout.Main = styled.div`
  margin: 0 auto; /* 가운데 정렬 */
  margin-top : 2rem;
  width : 1200px;
  position : relative;

  transition : all .3s; /* 애니매이션 효과*/

  ${media.desktop`
    width : 990px;
  `}

  ${media.tablet`
    margin-top : 1rem;
    width : calc(100% - 2rem);
  `}

  ${media.mobile`
    margin-top : 0.5rem;
    width : calc(100% - 1rem);
  `}
`;

export default Layout;