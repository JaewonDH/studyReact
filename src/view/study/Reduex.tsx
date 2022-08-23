import CardContainer from "component/CardContainer";
import CounterContainer from "view/study/reduex/CounterContainer";
import TodoContainer from "view/study/reduex/TodoContainer";

const Reduex = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <CardContainer label="Reduex">
          <CounterContainer></CounterContainer>
        </CardContainer>
        <CardContainer label="Reduex">
          <TodoContainer></TodoContainer>
        </CardContainer>
      </div>
    </>
  );
};

export default Reduex;
