import React, { FC} from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SaveIcon from '@mui/icons-material/Save';

import { Theme } from "../theme/Theme";
import { TagDaialog } from "./TagDialog";

interface Props {
  editMode: boolean;
  insertMode: boolean;
  tags: String[];
  tagOpen: boolean;
  setTags: React.Dispatch<React.SetStateAction<String[]>>;
  setTagOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tagDialogUpdate: React.MouseEventHandler<HTMLButtonElement>;
  onClickSaveMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteMarkdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * 登録/更新時のナビのボタン制御を行う.
 * @param props 
 * @returns 
 */
export const SwitchInsertUpdateNavi: FC<Props> = (props) => {

  const {
    editMode,
    insertMode,
    tags,
    tagOpen,
    setTags,
    setTagOpen,
    tagDialogUpdate,
    onClickSaveMarkdown,
    onClickUpdateMarkdown,
    onClickDeleteMarkdown,
  } = props;

  const onClickUpdateTag = () => { setTagOpen(true) };

  return (
    <>
      {editMode ?
        insertMode ?
          <>
            <BottomNavigation showLabels sx={{ backgroundColor: Theme.palette.secondary.main }}>
              <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="新規登録" icon={<SaveIcon />} onClick={onClickSaveMarkdown} />
            </BottomNavigation>
          </>
          :
          <>
            <BottomNavigation showLabels sx={{ backgroundColor: Theme.palette.secondary.main }}>
              <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="タグ" icon={<LocalOfferIcon />} onClick={onClickUpdateTag} />
              <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="更新" icon={<SaveIcon />} onClick={onClickUpdateMarkdown} />
              <BottomNavigationAction sx={{ color: Theme.palette.secondary.contrastText }} label="削除" icon={<DeleteIcon />} onClick={onClickDeleteMarkdown} />           
            </BottomNavigation>
            <TagDaialog tags={tags} setTags={setTags} tagOpen={tagOpen} setTagOpen={setTagOpen} tagDialogUpdate={tagDialogUpdate} />
          </>
        : undefined
      }
    </>
  );
};