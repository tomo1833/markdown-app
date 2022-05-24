import React, { FC } from "react";

import axios from "axios";

import {
  Box,
  Toolbar,
} from "@mui/material";

import { MarkdownType } from "../../../types/MarkdownType.type";
import { SwitchTextFieldTypography } from "../molecules/SwitchTextFieldTypography";
import { SwitchModeButtonNavi } from "../molecules/SwitchModeNavi";
import { SwitchInsertUpdateNavi } from "../molecules/SwitchInsertUpdateNavi";

interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SubHeaderNavigation: FC<Props> = (props) => {

  const { markdown, setMarkdown, editMode, insertMode, setInsertMode, onClickSwitchMode } = props;

  const onChangeURL = (event: React.ChangeEvent<HTMLTextAreaElement>) => { setMarkdown({ url: event.target.value, title: markdown.title, body: markdown.body }) };
  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => { setMarkdown({ url: markdown.url, title: event.target.value, body: markdown.body }) };

  const onClickSaveMarkdown = () => {
    axios.post(`http://localhost:5000/markdown`, markdown)
      .then(res => {
        console.log(res.data);
        setInsertMode(false);
      });
  };

  const onClickUpdateMarkdown = () => {
    axios.put(`http://localhost:5000/markdown` + markdown.url, markdown)
      .then(res => {
        console.log(res.data);
      });
  };

  const StyleToolBar = { backgroundColor: "#1976d2", display: "flex", justifyContent: "space-between" };
  const StyleRightBox = { display: "flex", flexDirection: "row" };
  return (
    <Box>
      <Toolbar sx={StyleToolBar}>
        <SwitchTextFieldTypography editMode={editMode} label='url' value={markdown.url} onChangeValue={onChangeURL} text={markdown.url} />
        <SwitchTextFieldTypography editMode={editMode} label='title' value={markdown.title} onChangeValue={onChangeTitle} text={markdown.title} />
        <Box sx={StyleRightBox}>
          <SwitchInsertUpdateNavi editMode={editMode} insertMode={insertMode} onClickSaveMarkdown={onClickSaveMarkdown} onClickUpdateMarkdown={onClickUpdateMarkdown} />
          <SwitchModeButtonNavi editMode={editMode} onClickSwitchMode={onClickSwitchMode} />
        </Box>
      </Toolbar>
    </Box>
  );
};