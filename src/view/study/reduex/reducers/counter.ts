import { ICounterInitValue } from "view/study/interface/reducersInterface";
const STATUS = {
  SETDATA: 1,
  INCREASE: 2,
  DECREASE: 3,
};

let initValue = {
  counter: 0,
  value: 1,
};

// action 함수는 export로 내보낸다.

export const setCounterValue = (value: number) => {
  return {
    type: STATUS.SETDATA,
    value,
  };
};

export const inCrease = () => {
  return {
    type: STATUS.INCREASE,
  };
};

export const deCrease = () => {
  return {
    type: STATUS.DECREASE,
  };
};

// 리듀서 함수도 export로 내보낸다.
const counter = (
  state = initValue,
  action: { type: number; value: number }
) => {
  switch (action.type) {
    case STATUS.SETDATA:
      return {
        ...state,
        value: action.value,
      };
    case STATUS.INCREASE:
      return {
        ...state,
        counter: state.counter + state.value,
      };
    case STATUS.DECREASE:
      return {
        ...state,
        counter: state.counter - state.value,
      };
    default:
      return state;
  }
};

export default counter;
