import { FC } from "react"
import { useNavigate } from "react-router-dom";

import { Box, Container, Fab, ThemeProvider, Toolbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { Theme } from "../uilibs/theme/Theme";
import { MarkdownType } from "../../types/MarkdownType.type"
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { MarkdownCardList } from "../uilibs/organisms/MarkdownCardList";

interface Props {
  markdowns: Array<MarkdownType>
};

export const TopTemplate: FC<Props> = (props) => {

  const { markdowns } = props;

  const navigate = useNavigate();
  const onClickNewPage = () => { navigate('careate_new_page') };

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
      <Fab sx={{ position: "absolute", right: "16px", bottom: "16px" }} color="secondary" aria-label="add" onClick={onClickNewPage}>
        <AddIcon />
      </Fab>
    </ThemeProvider>
  );
};
