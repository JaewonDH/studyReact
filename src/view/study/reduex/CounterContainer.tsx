import Counter from "view/study/reduex/Counter";
import {
  inCrease,
  deCrease,
  setCounterValue,
} from "view/study/reduex/reducers/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const { counter, value } = useSelector((state: any) => {
    return {
      counter: state.counter.counter,
      value: state.counter.value,
    };
  });

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(inCrease());
  };

  const decrease = () => {
    dispatch(deCrease());
  };

  const setData = (value: number) => {
    dispatch(setCounterValue(value));
  };

  return (
    <>
      <Counter
        countLabel={counter}
        setDataCount={setData}
        increase={increase}
        decrease={decrease}
      ></Counter>
    </>
  );
};

export default CounterContainer;
