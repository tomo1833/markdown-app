import { FC, useState } from "react";

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";

import { HomeNavigation } from "../molecules/HomeNavi";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


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