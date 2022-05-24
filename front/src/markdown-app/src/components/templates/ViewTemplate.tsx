import { FC } from "react";

import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import { Box, Drawer, Container, ThemeProvider } from "@mui/material";
import { MarkdownType } from "../../types/MarkdownType.type";

import { Theme } from "../uilibs/theme/Theme";

import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";

interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ViewTemplate: FC<Props> = (props) => {
  const { markdown, setMarkdown, editMode, insertMode, setInsertMode, onClickSwitchMode } = props;

  const StyleTemplateBox = { display: "flex", flexDirection: "column", height: "100vh" };
  const StyleMainBox = { display: "flex", flexDirection: "row", height: "100vh", width: '100%' };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={StyleTemplateBox}>
        <HeaderNavigation />
        <SubHeaderNavigation markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode}  onClickSwitchMode={onClickSwitchMode}/>
        <Drawer></Drawer>
        <Box sx={StyleMainBox}>
          <Container maxWidth="xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.body}</ReactMarkdown>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};