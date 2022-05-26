import { FC, useState } from "react";

import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import { Box, Container, ThemeProvider, Toolbar, CssBaseline } from "@mui/material";
import { MarkdownType } from "../../types/MarkdownType.type";

import { Theme } from "../uilibs/theme/Theme";

import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { LeftNaviagtion } from "../uilibs/organisms/LeftNaviagtion";

interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setUrlLocation: React.Dispatch<React.SetStateAction<string>>;
};

export const ViewTemplate: FC<Props> = (props) => {
  const { markdown, setMarkdown, editMode, insertMode, setInsertMode, onClickSwitchMode, setUrlLocation } = props;

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderNavigation />
        <LeftNaviagtion setUrlLocation={setUrlLocation} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <SubHeaderNavigation markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} />
          <Container className="markdown-view" maxWidth="xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.body}</ReactMarkdown>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};