import { useNavigate } from "react-router-dom";

import { FC } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';

export const HomeNavigation: FC = () => {

  const navigate = useNavigate();

  const onClickHome = () => { navigate('/') };

  return (
    <BottomNavigation showLabels sx={{ backgroundColor: "primary.main" }}>
      <BottomNavigationAction sx={{ color: "primary.contrastText" }} label="ホーム" icon={<HomeIcon />} onClick={onClickHome} />
    </BottomNavigation>
  )
}