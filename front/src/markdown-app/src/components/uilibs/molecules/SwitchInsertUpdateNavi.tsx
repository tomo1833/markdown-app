import React, { FC } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  editMode: boolean;
  insertMode: boolean;
  onClickSaveMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SwitchInsertUpdateNavi: FC<Props> = (props) => {

  const { editMode, insertMode, onClickSaveMarkdown, onClickUpdateMarkdown } = props;

  return (
    <BottomNavigation showLabels sx={{ backgroundColor: "#1976d2" }}>
      {editMode ?
        insertMode ?
          <BottomNavigationAction label="新規登録" icon={<SaveIcon />} onClick={onClickSaveMarkdown} /> : <BottomNavigationAction label="更新" icon={<SaveIcon />} onClick={onClickUpdateMarkdown} /> :
        <></>
      }
    </BottomNavigation>
  );
};