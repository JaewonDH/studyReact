import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface propTest {
  id: number;
  label: string;
}

const list: propTest[] = [
  { id: 1, label: "a" },
  { id: 2, label: "b" },
  { id: 3, label: "c" },
];

// 컴포넌트 함수는 대문자여야 함 <ProprsTest>
function ProprsTest(props: {
  label: string;
  label1: number;
  testProps: Array<number>;
}) {
  return (
    <div>
      <h4>{props.label}</h4>
      <h4>{props.label1}</h4>
      <h4>{props.testProps}</h4>
    </div>
  );
}

// 컴포넌트 함수는 대문자여야 함 <ArrayContents>
function ArrayContents(props: { contentsList: propTest[] }) {
  let list = [];
  for (let item of props.contentsList) {
    console.log(item);
    list.push(<li key={item.id}>{item.label}</li>); // for문 사용시 key 값 꼭 넣어줘야 함.
  }
  console.log(list);
  return <ul>{list}</ul>;
}

export default function Props() {
  return (
    // jsx 태그 return시  <></> <React.Fragment> 둘중 하나 사용 가능
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
              Props 데이터
            </Typography>
            <Divider />
            <ProprsTest
              label="proprs 넘김"
              label1={123}
              testProps={[0, 12, 2]}
            ></ProprsTest>
            <Divider />
            <ArrayContents contentsList={list}></ArrayContents>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
