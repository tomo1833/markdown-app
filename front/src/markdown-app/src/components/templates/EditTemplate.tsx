import { ThemeProvider } from "@emotion/react";
import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Graphviz from "graphviz-react";
import { FC, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownType } from "../../types/MarkdownType.type";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { Theme } from "../uilibs/theme/Theme";
import { CustomEditor } from "../uilibs/atoms/CustomEditor";

interface Props {
  markdown: MarkdownType;
  setMarkdown: React.Dispatch<React.SetStateAction<MarkdownType>>;
  editMode: boolean;
  insertMode: boolean;
  setInsertMode: React.Dispatch<React.SetStateAction<boolean>>;
  tags: String[];
  setTags: React.Dispatch<React.SetStateAction<String[]>>;
  tagOpen: boolean;
  setTagOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tagDialogUpdate: React.MouseEventHandler<HTMLButtonElement>;
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

  const {
    markdown,
    setMarkdown,
    editMode,
    insertMode,
    tags,
    setTags,
    tagOpen,
    setTagOpen,
    tagDialogUpdate,
    setInsertMode,
    onClickSwitchMode
  } = props;

  const StyleTemplateBox = { display: "grid", gridTemplateRows: " auto auto 1fr", height: "100vh", overflowY: "hidden" };
  const StyleMainBox = { display: "flex", flexDirection: "row", width: '100%', overflowY: "hidden" };
  const StyleLeftBox = { width: '50%', backgroundColor: Theme.palette.primary.main, overflowY: "auto" };
  const StyleRightBox = { width: '50%', overflowY: "auto" };

  const [value, setValue] = useState<string>(markdown.body);
  const onChangeValue = (value: string) => { console.log(value); setMarkdown({ id: markdown.id, url: markdown.url, title: markdown.title, body: value }); setValue(value) };

  useEffect(() => {
    setMarkdown({ id: markdown.id, url: markdown.url, title: markdown.title, body: value });
  }, [value])

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={StyleTemplateBox}>
        <HeaderNavigation />
        <Toolbar />
        <SubHeaderNavigation
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
                    ) :
                      <code className={className} {...props}>
                        {children}
                      </code>
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
