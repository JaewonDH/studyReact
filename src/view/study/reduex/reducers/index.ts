import { combineReducers } from "redux";
import counter from "view/study/reduex/reducers/counter";
import todoList from "view/study/reduex/reducers/todoList";

const rootReducer = combineReducers({
  counter,
  todoList,
});

export default rootReducer;
