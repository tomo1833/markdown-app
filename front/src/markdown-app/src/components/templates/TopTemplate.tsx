import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { Container, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { MarkdownType } from "../../types/MarkdownType.type"

import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { Theme } from "../uilibs/theme/Theme";
import { MarkdownCard } from "../uilibs/molecules/MarkdownCard";
import { MarkdownCardList } from "../uilibs/organisms/MarkdownCardList";

interface Props {
  markdowns: Array<MarkdownType>
};

export const TopTemplate: FC<Props> = (props) => {

  const { markdowns } = props;
  const theme = Theme;
  const styleContainer = { display: "flex", flexDirection: "row", paddingTop: "10px"};

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HeaderNavigation />
        <Container maxWidth="xl" sx={styleContainer}>
          <MarkdownCardList markdowns={markdowns} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}
