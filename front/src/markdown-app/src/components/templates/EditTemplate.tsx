import { ThemeProvider } from "@emotion/react";
import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Graphviz from "graphviz-react";
import { FC, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownType } from "../../types/MarkdownType.type";
import { MarkdownEditTextFiled } from "../uilibs/atoms/MarkdownEditTextFiled";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { Theme } from "../uilibs/theme/Theme";
import { MarkdownEditor } from "@react-libraries/markdown-editor";
import { CustomEditor } from "../uilibs/atoms/CustomEditor";


interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClickSwitchMode: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ErrorFallback = () => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>表示できません</pre>
    </div>
  )
}


export const EditTemplate: FC<Props> = (props) => {

  const { markdown, setMarkdown, editMode, insertMode, setInsertMode, onClickSwitchMode } = props;

  const StyleTemplateBox = { display: "flex", flexDirection: "column", height: "100vh" };
  const StyleMainBox = { display: "flex", flexDirection: "row", height: "100vh", width: '100%' };
  const StyleLeftBox = { height: "100%", width: '50%', backgroundColor: Theme.palette.primary.main };
  const StyleRightBox = { height: "100vh", width: '50%' };

  const [value, setValue] = useState<string>(markdown.body);
  const onChangeValue = (value: string) => { console.log(value); setMarkdown({ url: markdown.url, title: markdown.title, body: value }); setValue(value) };

  useEffect(() => {
    setMarkdown({ url: markdown.url, title: markdown.title, body: value });
  }, [value])


  return (
    <ThemeProvider theme={Theme}>
      <Box sx={StyleTemplateBox}>
        <HeaderNavigation />
        <Toolbar />
        <SubHeaderNavigation markdown={markdown} setMarkdown={setMarkdown} editMode={editMode} insertMode={insertMode} setInsertMode={setInsertMode} onClickSwitchMode={onClickSwitchMode} />
        <Box sx={StyleMainBox}>
          <Box sx={StyleLeftBox}>
            <Container >
              <CustomEditor markdown={markdown} onChangeValue={onChangeValue} />
            </Container>
          </Box>
          <Box sx={StyleRightBox}>
            <Container className="markdown-view" >
              <ReactMarkdown
                children={markdown.body}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-flow/.exec(className || '');
                    return match ? (
                      <ErrorBoundary FallbackComponent={ErrorFallback} >
                        <Graphviz dot={String(children)} />
                      </ErrorBoundary>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              />
            </Container >
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
