import { useSelector, useDispatch } from "react-redux";
import { add, remove, toggle } from "view/study/reduex/reducers/todoList";
import { ITodoItem } from "view/study/interface/reducersInterface";
import Todo from "view/study/reduex/Todo";
const TodoListContainer = () => {
  const { todoArray } = useSelector((state: any) => {
    console.log("state", state);
    return {
      todoArray: state.todoList,
    };
  });
  console.log("state", todoArray);

  const dispatch = useDispatch();

  const onAdd = (item: ITodoItem) => {
    dispatch(add(item));
  };

  const onRemove = (index: number) => {
    dispatch(remove(index));
  };

  const onToggle = (index: number) => {
    dispatch(toggle(index));
  };

  return (
    <>
      <Todo
        todoArray={todoArray}
        onAdd={onAdd}
        onRemove={onRemove}
        onToggle={onToggle}
      ></Todo>
    </>
  );
};

export default TodoListContainer;
