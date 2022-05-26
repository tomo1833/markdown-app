import { FC } from "react";

import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";

import { HomeNavigation } from "../molecules/HomeNavi";

export const HeaderNavigation: FC = () => {

  const StyleToolBar = { display: "flex", justifyContent: "space-between"};

  return (
    <AppBar position="relative">
      <Toolbar sx={StyleToolBar}>
        <Typography>markdown</Typography>
        <HomeNavigation />
      </Toolbar>
    </AppBar>
  );
};