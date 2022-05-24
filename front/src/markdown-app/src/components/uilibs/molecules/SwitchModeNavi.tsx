import React, { FC } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';

interface Props {
  editMode: boolean;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SwitchModeButtonNavi: FC<Props> = (props) => {

  const { editMode, onClickSwitchMode } = props;

  return (
    <BottomNavigation showLabels sx={{ backgroundColor: "#1976d2" }}>
      {editMode ? <BottomNavigationAction label="表示" icon={<PageviewIcon />} onClick={onClickSwitchMode} /> : <BottomNavigationAction label="編集" icon={<EditIcon />} onClick={onClickSwitchMode} />}
    </BottomNavigation>
  );
};