import "easymde/dist/easymde.min.css";
import "../../../index.css"
import { FC } from "react";

import { MarkdownType } from "../../../types/MarkdownType.type";
import SimpleMdeReact from "react-simplemde-editor";

interface Props {
  markdown: MarkdownType;
  onChangeValue: any;
};

export const MarkdownEditTextFiled: FC<Props> = (props) => {
  const { markdown, onChangeValue } = props;

  return (
    <SimpleMdeReact value={markdown.body} onChange={onChangeValue} />
  );
};