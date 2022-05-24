import { FC } from "react";

import { TextField } from "@mui/material";
import { MarkdownType } from "../../../types/MarkdownType.type";

interface Props {
  markdown: MarkdownType;
  onChangeValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const MarkdownEditTextFiled: FC<Props> = (props) => {
  const { markdown, onChangeValue } = props;
  return (
    <TextField
      id="standard-textarea"
      placeholder="# タイトル"
      multiline
      variant="standard"
      value={markdown.body}
      sx={{ backgroundColor: "#121212", width: "100%", height: "100%", fontSize: "16px", coloc: "white" }}
      onChange={onChangeValue}
    />
  );
};