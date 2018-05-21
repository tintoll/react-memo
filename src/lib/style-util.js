import { css, keyframes } from "styled-components";


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


/* stretchOut 은 확대가 되면서 투명도가 사라지고, shrinkIn 은 작아지면서 투명해집니다.*/
export const transitions = {
  stretchOut: keyframes`
        0%{
            opacity: 0;
            transform: scale(0.25,0.25);
        }
        100% {
            opacity: 1;
            transform: scale(1, 1);
        }
    `,
    shrinkIn: keyframes`
        0% {
            opacity: 1;
            transform: scale(1,1);
        }
        100% {
            opacity: 0;
            transform: scale(0.25,0.25);
        }
    `
}