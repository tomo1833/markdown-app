import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { Container, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { MarkdownType } from "../../types/MarkdownType.type"

import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { Theme } from "../uilibs/theme/Theme";

interface Props {
  markdowns: Array<MarkdownType>
};

export const TopTemplate: FC<Props> = (props) => {

  const { markdowns } = props;
  const theme = Theme;
  const styleContainer = { display: "flex", flexDirection: "column" };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HeaderNavigation />
        <Container maxWidth="xl" sx={styleContainer}>
          {markdowns.map((markdown) => { return <Link to={markdown.url} key={markdown.url}>{markdown.title}</Link> })}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
