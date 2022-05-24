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
    <BottomNavigation showLabels>
      <BottomNavigationAction label="ホーム" icon={<HomeIcon />} onClick={onClickHome} />
    </BottomNavigation>
  )
}