import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { MarkdownType } from "../../types/MarkdownType.type";

import { EditTemplate } from "../templates/EditTemplate";
import { ViewTemplate } from "../templates/ViewTemplate";

export const Markdown: FC = () => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<MarkdownType>({ url: '', title: '', body: '' });
  const [insertMode, setInsertMode] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    axios.get<MarkdownType>("http://localhost:5000/markdown" + location.pathname)
      .then(res => {
        if (!Object.keys(res.data).length) {
          setMarkdown({ url: decodeURI(location.pathname), title: '', body: '' });
          setEditMode(true);
          setInsertMode(true);
        } else {
          setMarkdown(res.data);
        }
      })
  }, [])

  const onClickSwitchMode = () => { setEditMode(!editMode) }

  return (
    <>
      {editMode ?
        <EditTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} /> :
        <ViewTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} />
      }
    </>
  );
};