import { ThemeProvider } from "@emotion/react";
import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownType } from "../../types/MarkdownType.type";
import { MarkdownEditTextFiled } from "../uilibs/atoms/MarkdownEditTextFiled";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { Theme } from "../uilibs/theme/Theme";


interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const EditTemplate: FC<Props> = (props) => {

  const { markdown, setMarkdown, editMode, insertMode, setInsertMode, onClickSwitchMode } = props;

  const StyleTemplateBox = { display: "flex", flexDirection: "column", height: "100vh" };
  const StyleMainBox = { display: "flex", flexDirection: "row", height: "100vh", width: '100%' };
  const StyleLeftBox = { height: "100vh", width: '50%', backgroundColor: Theme.palette.primary.main };
  const StyleRightBox = { height: "100vh", width: '50%' };

  const onChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => { setMarkdown({ url: markdown.url, title: markdown.title, body: event.target.value }); };

  useEffect(() => {
  }, [markdown.body]);

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={StyleTemplateBox}>
        <HeaderNavigation />
        <Toolbar />
        <SubHeaderNavigation markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} />
        <Box sx={StyleMainBox}>
          <Box sx={StyleLeftBox}>
            <Container>
              <MarkdownEditTextFiled markdown={markdown} onChangeValue={onChangeValue} />
            </Container >
          </Box>
          <Box sx={StyleRightBox}>
            <Container className="markdown-view" >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.body}</ReactMarkdown>
            </Container >
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
