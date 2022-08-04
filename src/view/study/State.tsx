import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import StateGoodSample from "../../component/StateGoodSample";
import { useParams } from "react-router-dom";

const HookTest = () => {
  let [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("처음 한번 호출 : ", count);
  }, []);

  useEffect(() => {
    console.log("값이 변경 될 때 마다 호출 ", count);
  }, [count]);

  return (
    <>
      <div>
        <span>count :{count}</span>
      </div>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        카운트 증가
      </button>
    </>
  );
};

export default function State() {
  const params = useParams();
  console.log("params", params);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          height: "100%",
          pt: 12,
        }}
      >
        <Card sx={{ minWidth: 275, mb: 10 }}>
          <CardContent>
            <Typography variant="h2" component="div">
              State Hook
            </Typography>
            <Typography variant="h6" component="div">
              useState 사용해야 변경 되는 값에 따라 재 랜더링 된다.
            </Typography>
            <Divider />
            <HookTest></HookTest>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, mb: 10 }}>
          <CardContent>
            <Typography variant="h2" component="div">
              state use
            </Typography>
            <Typography variant="h6" component="div">
              사용 법 상위 컴포넌트에서 사용해서 하위 컴포넌트로 전달해야 한다.
            </Typography>
            <Divider />
            <StateGoodSample></StateGoodSample>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
