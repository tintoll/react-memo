import { css } from "styled-components";


/*
  디바이스 사이즈를 4개로 분류
  기본적으로 1200px이상인 디바이스로 작업 
  desktop
  tablet
  mobile로 분류
*/ 
export const media = ({
  desktop : (...args) => css`
    @media (max-width:1200px) {
      ${ css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width:992px) {
      ${ css(...args)}
    }
  `,
  mobile : (...args) => css`
    @media (max-width:600px) {
      ${ css(...args)}
    }
  `,
});