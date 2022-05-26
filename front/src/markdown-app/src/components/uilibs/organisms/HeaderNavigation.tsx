import { FC } from "react";

import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";

import { HomeNavigation } from "../molecules/HomeNavi";

export const HeaderNavigation: FC = () => {

  const StyleToolBar = { display: "flex", justifyContent: "space-between" };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={StyleToolBar}>
        <Typography>markdown</Typography>
        <HomeNavigation />
      </Toolbar>
    </AppBar>
  );
};