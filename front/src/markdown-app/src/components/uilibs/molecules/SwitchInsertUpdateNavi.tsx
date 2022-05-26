import React, { FC } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import SaveIcon from '@mui/icons-material/Save';
import { Theme } from "../theme/Theme";

interface Props {
  editMode: boolean;
  insertMode: boolean;
  onClickSaveMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SwitchInsertUpdateNavi: FC<Props> = (props) => {

  const { editMode, insertMode, onClickSaveMarkdown, onClickUpdateMarkdown } = props;

  return (
    <BottomNavigation showLabels sx={{ backgroundColor: Theme.palette.secondary.main }}>
      {editMode ?
        insertMode ?
          <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="新規登録" icon={<SaveIcon />} onClick={onClickSaveMarkdown} /> : <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="更新" icon={<SaveIcon />} onClick={onClickUpdateMarkdown} /> : undefined}
    </BottomNavigation>
  );
};