import * as React from "react";
import { useState } from "react";
import api from "../../modules/axios";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const getList: Function = async (responseCallBack: Function) => {
  try {
    let response = await api.get("users");
    console.log(response);
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
  let [userList, setUserList] = useState<User[] | null>(null);

  const responseCallBack = (userList: User[]): void => {
    setUserList(userList);
  };

  let list: JSX.Element[] = [];

  if (userList == null) {
    getList(responseCallBack);
  } else {
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
  }

  console.log("userList", userList);
  console.log("list", list);
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
