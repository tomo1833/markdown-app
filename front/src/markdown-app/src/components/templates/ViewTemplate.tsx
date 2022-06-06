import React, { FC, useState } from "react";

import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import Graphviz from "graphviz-react";
import { Box, Container, ThemeProvider, Toolbar, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import { MarkdownType } from "../../types/MarkdownType.type";

import { Theme } from "../uilibs/theme/Theme";

import { SubHeaderNavigation } from "../uilibs/organisms/SubHeaderNavigation";
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { LeftNaviagtion } from "../uilibs/organisms/LeftNaviagtion";
import { ErrorBoundary } from "react-error-boundary";

import mermaid from "mermaid"
import { TagChip } from "../uilibs/molecules/TagChip";

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
  setUrlLocation: React.Dispatch<React.SetStateAction<string>>;
};

const ErrorFallback = () => {
  return (
    <div role="alert">
      <pre>表示できません</pre>
    </div>
  )
}

const converterH2 = ({ ...props }) => {
  return (
    <p>{props.children}</p>
  );
}

const converterH3 = ({ ...props }) => {
  return (
    <p>{props.children}</p>
  );
}

const converterH4 = ({ ...props }) => {
  return (
    <p>{props.children}</p>
  );
}


export const ViewTemplate: FC<Props> = (props) => {
  const {
    markdown,
    setMarkdown,
    editMode,
    insertMode,
    setInsertMode,
    tags,
    setTags,
    tagOpen,
    setTagOpen,
    tagDialogUpdate,
    onClickSwitchMode,
    setUrlLocation
  } = props;

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderNavigation />
        <LeftNaviagtion setUrlLocation={setUrlLocation} />
        <Box component="main" sx={{ flexGrow: 1 }}>
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
          <Container className="markdown-view" maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2} direction="column">
                  <Grid item spacing={12}>
                    <Paper elevation={3} id="table-of-contents" sx={{ padding: "10px" }}>
                      <Typography>目次</Typography>
                      <ReactMarkdown
                        allowedElements={["h2", "h3", "h4"]}
                        children={markdown.body}
                        components={{ h2: converterH2, h3: converterH3, h4: converterH4, }}
                      />
                    </Paper>
                  </Grid>
                  {tags.length !== 0 ?
                    <Grid item spacing={12}>
                      <Paper elevation={3} id="table-of-contents" sx={{ padding: "10px" }}>
                        <TagChip tags={tags} />
                      </Paper>
                    </Grid>
                    :
                    <></>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};