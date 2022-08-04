import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../App.css";

interface ButtonInfo {
  name: string;
  path: string;
}

const routeList: ButtonInfo[] = [{ name: "Study", path: "/study" }];

const Buttons: Function = (props: {
  routeList: ButtonInfo[];
}): JSX.Element[] => {
  const navigate = useNavigate();
  const list = routeList.map((item: ButtonInfo, index) => {
    return (
      <Button
        key={index}
        color="inherit"
        onClick={() => {
          navigate(item.path);
        }}
      >
        {item.name}
      </Button>
    );
  });
  return list;
};

export default function Header() {
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Buttons routeList={routeList}></Buttons>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
