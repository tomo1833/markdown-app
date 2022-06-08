import React, { FC } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Theme } from "../theme/Theme";

interface Props {
  editMode: boolean;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SwitchModeButtonNavi: FC<Props> = (props) => {

  const { editMode, onClickSwitchMode } = props;

  return (
    <BottomNavigation showLabels sx={{ backgroundColor: Theme.palette.secondary.main }}>
      {editMode ? <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="表示" icon={<PageviewIcon />} onClick={onClickSwitchMode} /> : <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText}} label="編集" icon={<EditIcon />} onClick={onClickSwitchMode} />}
    </BottomNavigation>
  );
};