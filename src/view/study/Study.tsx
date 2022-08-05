import { Routes, Route } from "react-router-dom";
import LeftMenu from "../../component/LeftMenu";
import Props from "./Props";
import State from "./State";
import UserList from "./UserList";
import ClassComponent from "./ClassComponent";
import Box from "@mui/material/Box";
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
        <Route path="/list-api/:id" element={<UserList />}></Route>
        <Route path="/class-component" element={<ClassComponent />}></Route>
      </Routes>
    </Box>
  );
}
