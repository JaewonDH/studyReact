import * as React from "react";
import { useState, useCallback } from "react";
import { ITodoItem, ITodoProps } from "view/study/interface/reducersInterface";
const TodoItem = React.memo(
  ({ item, toogle }: { item: ITodoItem; toogle: Function }) => {
    console.log("랜더링 TodoItem", item);

    return (
      <>
        <li
          style={{ color: item.toogle ? "red" : "black" }}
          onClick={() => {
            toogle(item.id);
          }}
        >
          {item.label}
        </li>
      </>
    );
  }
);

const TodoList = React.memo(
  ({
    todoArray,
    toogle,
  }: {
    todoArray: Array<ITodoItem>;
    toogle: Function;
  }) => {
    console.log("랜더링 TodoList");
    return (
      <>
        {todoArray.map((item) => {
          return (
            <TodoItem key={item.id} item={item} toogle={toogle}></TodoItem>
          );
        })}
      </>
    );
  }
);

const Todo = (props: ITodoProps) => {
  const [inputValue, setInputValue] = useState("");

  console.log("랜더링 Todo");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    props.onAdd({
      label: inputValue,
      toogle: false,
    });
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange}></input>
      <button onClick={onClick}>등록</button>
      <TodoList todoArray={props.todoArray} toogle={props.onToggle}></TodoList>
    </>
  );
};

export default Todo;
