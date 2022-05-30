import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { MarkdownType } from "../../types/MarkdownType.type";

import { EditTemplate } from "../templates/EditTemplate";
import { ViewTemplate } from "../templates/ViewTemplate";

export const Markdown: FC = () => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<MarkdownType>({ url: '', title: '', body: '' });
  const [insertMode, setInsertMode] = useState<boolean>(false);
  const [urlLocation, setUrlLocation] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === 'create_new_page') {
      // 新規登録
      setMarkdown({ url: '', title: '', body: '# 新規登録' });
      setEditMode(true);
      setInsertMode(true);
    } else {
      // 新規/更新の判定
      axios.get<MarkdownType>("http://localhost:5000/markdown" + location.pathname)
        .then(res => {
          if (!Object.keys(res.data).length) {
            // 新規登録(データ無し)
            setMarkdown({ url: decodeURI(location.pathname), title: '', body: '# 新規登録' });
            setEditMode(true);
            setInsertMode(true);
          } else {
            // 表示(データあり)
            setMarkdown(res.data);
            setUrlLocation(res.data.url);
          }
        });
    }
  }, [urlLocation])

  const onClickSwitchMode = () => { setEditMode(!editMode) }

  return (
    <>
      {editMode ?
        <EditTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} /> :
        <ViewTemplate markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} setUrlLocation={setUrlLocation} />
      }
    </>
  );
};