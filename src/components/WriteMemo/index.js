import InputPlaceholder from "./InputPlaceholder";
import WhiteBox from "./WhiteBox";

export {
  InputPlaceholder,
  WhiteBox
}

// 이렇게 만들어주면 가져다 사용하는 부분에서 아래와같이 편하게 사용할수 있다.
// import { InputPlaceholder, WhiteBox } from "components/WriteMemo";


/* 
더 간단하게는 아래와 같이도 가능합니다.
export { default as InputPlaceholder } from './InputPlaceholder';
export { default as WhiteBox } from './WhiteBox';
*/