import { FC, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";

import { MarkdownType } from "../../types/MarkdownType.type";
import { EditTemplate } from "../templates/EditTemplate";
import { ViewTemplate } from "../templates/ViewTemplate";
import { TagType } from "../../types/TagType.type";

export const Markdown: FC = () => {

  const [markdown, setMarkdown] = useState<MarkdownType>({ id: 0, url: '', title: '', body: '' });

  const [editMode, setEditMode] = useState<boolean>(false);
  const [insertMode, setInsertMode] = useState<boolean>(false);
  const [tags, setTags] = useState<String[]>([]);
  const [tagsType, setTagsType] = useState<Array<TagType>>([]);
  const [tagOpen, setTagOpen] = useState<boolean>(false);

  const [urlLocation, setUrlLocation] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === 'create_new_page') {
      // 新規登録
      setMarkdown({ id: 0, url: '', title: '', body: '# 新規登録' });
      setEditMode(true);
      setInsertMode(true);
    } else {
      // 新規/更新の判定
      axios.get<MarkdownType>("http://localhost:5000/markdown" + location.pathname)
        .then(res => {
          if (!Object.keys(res.data).length) {
            // 新規登録(データ無し)
            setMarkdown({ id: 0, url: decodeURI(location.pathname), title: '', body: '# 新規登録' });
            setEditMode(true);
            setInsertMode(true);
          } else {
            // 表示(データあり)
            setMarkdown(res.data);
            setUrlLocation(res.data.url);

            axios.get<Array<TagType>>("http://localhost:5000/tag/" + markdown.id)
              .then(res => {
                setTagsType(res.data);
                res.data.map((tag: TagType) => { console.log(tag.name) })
                setTags(res.data.map((tag: TagType) => { return tag.name }));
              });

          }
        });


    }
  }, [urlLocation])

  const onClickSwitchMode = () => { setEditMode(!editMode) }

  const tagDialogUpdate = () => {
    let newTag: Array<TagType> = [];
    let isExists: boolean = false;
    console.log(tags);
    tags.map((tag: String) => {
      isExists = false;
      if (tagsType.length) {
        tagsType.map((tagType: TagType) => {
          if (tag === tagType.name) {
            newTag.push(tagType);
            isExists = true;
          }
        })
      }
      if (!isExists) {
        newTag.push({ id: markdown.id, name: tag, tag_id: 0 });
      }
    });
    console.log('NEW TAG');
    console.log(newTag);
    axios.post("http://localhost:5000/tag/" + markdown.id, newTag)
      .then(res => { console.log("成功しました。") });
    setTagOpen(false)
  };

  return (
    <>
      {editMode ?
        <EditTemplate
          markdown={markdown}
          setMarkdown={setMarkdown}
          editMode={editMode}
          insertMode={insertMode}
          setInsertMode={setInsertMode}
          tags={tags}
          setTags={setTags}
          tagOpen={tagOpen}
          setTagOpen={setTagOpen}
          tagDialogUpdate={tagDialogUpdate}
          onClickSwitchMode={onClickSwitchMode}
        />
        :
        <ViewTemplate
          markdown={markdown}
          setMarkdown={setMarkdown}
          editMode={editMode}
          insertMode={insertMode}
          setInsertMode={setInsertMode}
          tags={tags}
          setTags={setTags}
          tagOpen={tagOpen}
          setTagOpen={setTagOpen}
          tagDialogUpdate={tagDialogUpdate}
          onClickSwitchMode={onClickSwitchMode}
          setUrlLocation={setUrlLocation}
        />
      }
    </>
  );
};