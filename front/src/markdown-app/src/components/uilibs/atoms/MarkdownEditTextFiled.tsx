import { FC } from "react";

import { TextField, ThemeProvider } from "@mui/material";
import { MarkdownType } from "../../../types/MarkdownType.type";
import { Theme } from "../theme/Theme";

interface Props {
  markdown: MarkdownType;
  onChangeValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const MarkdownEditTextFiled: FC<Props> = (props) => {
  const { markdown, onChangeValue } = props;

  const StyleTextField = { width: "100%", height: "100%", fontSize: "16px"};
  return (
    <ThemeProvider theme={Theme}>
      <TextField
        id="standard-textarea"
        placeholder="# タイトル"
        multiline
        variant="standard"
        value={markdown.body}
        sx={StyleTextField}
        inputProps={{ style: { color: Theme.palette.primary.contrastText } }}
        onChange={onChangeValue}
      />
    </ThemeProvider>
  );
};