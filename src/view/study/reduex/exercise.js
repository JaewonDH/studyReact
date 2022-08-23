import { createStore } from "redux";

const STATUS = {
  INCREASE: 1,
  DECREASE: 2,
  ADD_NAME: 3,
  ADD_ITEM: 4,
};

const initValue = {
  counter: 0,
  name: "",
  list: [],
};

const inCrease = () => {
  return {
    type: STATUS.INCREASE,
  };
};

const deCrease = () => {
  return {
    type: STATUS.DECREASE,
  };
};

const addName = (name) => {
  return {
    type: STATUS.ADD_NAME,
    name,
  };
};

const addList = (item) => {
  return {
    type: STATUS.ADD_ITEM,
    item,
  };
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case STATUS.INCREASE:
      return {
        ...initValue,
        counter: initValue.counter + 1,
      };
    case STATUS.DECREASE:
      return {
        ...initValue,
        counter: initValue.counter - 1,
      };
    case STATUS.ADD_NAME:
      return {
        ...initValue,
        name: action.name,
      };
    case STATUS.ADD_ITEM:
      return {
        ...initValue,
        list: [...initValue, action.item],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("store.getState()", store.getState());

const listener = () => {
  console.log("listener", store.getState());
};

store.subscribe(listener);

store.dispatch(addName("jaewon"));
store.dispatch(inCrease());
