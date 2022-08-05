import * as React from "react";
import { useState, useEffect } from "react";
import api from "../../modules/axios";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useLocation, useParams } from "react-router-dom";
const getList: Function = async (responseCallBack: Function) => {
  try {
    let response = await api.get("users");
    const userList = response.data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
    });
    responseCallBack(userList);
  } catch (error: any) {
    console.log(error);
  }
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: Function = (): JSX.Element => {
  // 라우터 navigate 전달한 state 값
  let location = useLocation();
  // 라우터 param 1전달
  const params = useParams();
  console.log("location", location);
  console.log("params", params);
  let [userList, setUserList] = useState<User[]>([]);

  const responseCallBack = (userList: User[]): void => {
    setUserList(userList);
  };

  let list: JSX.Element[] = [];

  useEffect(() => {
    getList(responseCallBack);
  }, []);

  list = userList.map((user) => {
    return (
      <div key={user.id}>
        <span>id:{user.id} |</span>
        <span>name:{user.name}|</span>
        <span>username:{user.username}|</span>
        <span>email:{user.email}</span>
      </div>
    );
  });

  return (
    <>
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
            {list}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default UserList;
