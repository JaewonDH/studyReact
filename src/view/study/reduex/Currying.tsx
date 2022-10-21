import SelectInput from "@mui/material/Select/SelectInput";
import CardContainer from "component/CardContainer";
import { useState } from "react";
import CounterContainer from "./CounterContainer";

const Currying = () => {
  const [inputValue, setinput] = useState({});

  const onChangeCurrying = (inputType: string) => {
    return (event: any) => {
      //커링 패턴
      setinput({ ...inputValue, [inputType]: event.target.value });
    };
  };

  //커링 패턴
  const onClick = () => () => console.log(inputValue);

  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <CardContainer label="Currying">
          <div>
            <div>
              <span>input currying - name </span>
              <input onChange={onChangeCurrying("name")}></input>
            </div>
            <div>
              <span>input currying - age </span>
              <input onChange={onChangeCurrying("age")}></input>
            </div>
            <button onClick={onClick()}>dddd</button>
          </div>
        </CardContainer>
      </div>
    </>
  );
};

export default Currying;
