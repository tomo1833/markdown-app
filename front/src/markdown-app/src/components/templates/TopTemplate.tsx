import { FC } from "react"

import { Container, ThemeProvider, Toolbar } from "@mui/material";
import { Box } from "@mui/material";

import { Theme } from "../uilibs/theme/Theme";
import { MarkdownType } from "../../types/MarkdownType.type"
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { MarkdownCardList } from "../uilibs/organisms/MarkdownCardList";

interface Props {
  markdowns: Array<MarkdownType>
};

export const TopTemplate: FC<Props> = (props) => {

  const { markdowns } = props;
  const theme = Theme;
  const styleContainer = { display: "flex", flexDirection: "row", paddingTop: "10px" };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HeaderNavigation />
        <Toolbar />
        <Container maxWidth="xl" sx={styleContainer}>
          <MarkdownCardList markdowns={markdowns} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};
