import { useState } from "react";

interface ICounterProps {
  countLabel: number;
  setDataCount: Function;
  increase: React.MouseEventHandler<HTMLButtonElement>;
  decrease: React.MouseEventHandler<HTMLButtonElement>;
}

const Counter = (props: ICounterProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setDataCount(Number(event.target.value));
  };

  return (
    <>
      <h1>{props.countLabel}</h1>
      <input type="number" onChange={onChange}></input>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
    </>
  );
};

export default Counter;
