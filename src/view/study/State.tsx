import React, { useEffect, useState, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import StateGoodSample from "../../component/StateGoodSample";
import { useParams } from "react-router-dom";

interface User {
  name: string;
  age: string;
}

interface AddUserProps {
  userList: User[];
  inputUser: User;
  addEvent: Function;
  inputChangeEvnet: Function;
  removeEvent: Function;
}

const AddUser = (props: AddUserProps): JSX.Element => {
  return (
    <>
      <div>
        <span>이름:</span>
        <input
          type="text"
          onChange={(event) => {
            props.inputChangeEvnet(true, event.target.value);
          }}
        />
        <span>나이:</span>
        <input
          type="text"
          onChange={(event) => {
            props.inputChangeEvnet(false, event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addEvent();
          }}
        >
          추가
        </button>
      </div>
      {props.userList.map((user, index) => {
        return (
          <div key={index}>
            <span>
              이름:{user.name} - 나이: {user.age}{" "}
            </span>
            <button
              onClick={() => {
                props.removeEvent(index);
              }}
            >
              제거
            </button>
          </div>
        );
      })}
    </>
  );
};

const HookTest = () => {
  let [count, setCount] = useState<number>(0);
  let [userList, setUserList] = useState<User[]>([]);
  let [inputUser, setInputUser] = useState<User>({
    name: "",
    age: "",
  });

  useEffect(() => {
    console.log("처음 한번 호출 : ", count);
  }, []);

  useEffect(() => {
    console.log("값이 변경 될 때 마다 호출 ", count);
  }, [count]);

  const addEvent = () => {
    setUserList([
      ...userList,
      {
        name: inputUser.name,
        age: inputUser.age,
      },
    ]);
  };
  const inputChangeEvnet = (isUserName: boolean, value: string) => {
    const setValue = isUserName
      ? { ...inputUser, name: value }
      : { ...inputUser, age: value };
    setInputUser(setValue);
  };

  const removeEvnet = (index: number) => {
    setUserList(userList.filter((user, filterIndex) => index !== filterIndex));
  };

  // useCallback;  리랜더링 시 함수들을 다시 생성하지 않고 기존 함수 유지하는 기능

  const userCount = useMemo(() => {
    //키입력에 의한 이벤트는 호출이 안되고 userList 변경에 대한 호출만 발생
    console.log("값이 변경 될 때만 호출 됨 ");
    return userList.length;
  }, [userList]);

  console.log("dddddd");

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
      <AddUser
        userList={userList}
        inputUser={inputUser}
        addEvent={addEvent}
        inputChangeEvnet={inputChangeEvnet}
        removeEvent={removeEvnet}
      />
      <div>User count : {userCount}</div>
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
