import CardContainer from "component/CardContainer";
import Bank from "view/study/reducer/Bank";
import School from "view/study/reducer/School";
import CustomHookApiList from "view/study/reducer/CustomHookApiList";
const UseReducer = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <CardContainer label="예제1 reducer">
          <Bank></Bank>
        </CardContainer>
        <CardContainer label="예제2 reducer">
          <School></School>
        </CardContainer>
        <CardContainer label="예제2 reducer">
          <CustomHookApiList></CustomHookApiList>
        </CardContainer>
      </div>
    </>
  );
};

export default UseReducer;
