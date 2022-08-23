import { Routes, Route } from "react-router-dom";
import LeftMenu from "component/LeftMenu";
import Props from "view/study/Props";
import State from "view/study/State";
import ApiList from "view/study/ApiList";
import ContextApi from "view/study/ContextApi";
import UserHook from "view/study/UserHook";
import Box from "@mui/material/Box";
import UseReducer from "view/study/UseReducer";
import Reduex from "view/study/Reduex";

export default function Study() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
      }}
    >
      <LeftMenu></LeftMenu>
      <Routes>
        <Route path="/" index={false} element={<Props />}></Route>
        <Route path="/props" element={<Props />}></Route>
        <Route path="/state" element={<State />}></Route>
        <Route path="/list-api/:id" element={<ApiList />}></Route>
        <Route path="/context" element={<ContextApi />}></Route>
        <Route path="/user" element={<UserHook />}></Route>
        <Route path="/useReducer" element={<UseReducer />}></Route>
        <Route path="/reduex" element={<Reduex />}></Route>
      </Routes>
    </Box>
  );
}
