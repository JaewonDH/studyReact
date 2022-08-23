import { ITodoItem } from "view/study/interface/reducersInterface";
const STATUS = {
  ADD: 4,
  REMOVE: 5,
  TOGGLE: 6,
};

const todoArray: Array<ITodoItem> = [];

interface IAction {
  type: number;
  item?: ITodoItem;
  index?: number;
}

let nextId: number = 0;

export const add = (item: ITodoItem) => {
  return {
    type: STATUS.ADD,
    item,
  };
};

export const remove = (index: number) => {
  return {
    type: STATUS.REMOVE,
    index,
  };
};

export const toggle = (index: number) => {
  return {
    type: STATUS.TOGGLE,
    index,
  };
};

const todoList = (state = todoArray, action: IAction) => {
  switch (action.type) {
    case STATUS.ADD:
      console.log(action.item);
      nextId++;
      return [
        ...state,
        {
          id: nextId,
          label: action.item!.label,
          toogle: action.item!.toogle,
        },
      ];
    case STATUS.REMOVE:
      return state.filter((item) => {
        return action.index !== item.id;
      });
    case STATUS.TOGGLE:
      return state.map((item) => {
        if (action.index === item.id) {
          return { ...item, toogle: !item.toogle };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todoList;
