import { FC } from "react"
import { useNavigate } from "react-router-dom";

import { Box, Container, Fab, ThemeProvider, Toolbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { Theme } from "../uilibs/theme/Theme";
import { MarkdownType } from "../../types/MarkdownType.type"
import { HeaderNavigation } from "../uilibs/organisms/HeaderNavigation";
import { MarkdownCardList } from "../uilibs/organisms/MarkdownCardList";
import { LeftNaviagtion } from "../uilibs/organisms/LeftNaviagtion";

interface Props {
  markdowns: Array<MarkdownType>;
  setUrlLocation: React.Dispatch<React.SetStateAction<string>>;
};

export const TopTemplate: FC<Props> = (props) => {

  const { markdowns, setUrlLocation } = props;

  const navigate = useNavigate();
  const onClickNewPage = () => { navigate('create_new_page') };

  const theme = Theme;
  const styleContainer = { display: "flex", flexDirection: "row", paddingTop: "20px", paddingBottom: "20px" };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <HeaderNavigation />
        <LeftNaviagtion setUrlLocation={setUrlLocation} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Container maxWidth="xl" sx={styleContainer}>
            <MarkdownCardList markdowns={markdowns} />
          </Container>
        </Box>
      </Box>
      <Fab sx={{ position: "fixed", right: "16px", bottom: "16px" }} color="secondary" aria-label="add" onClick={onClickNewPage}>
        <AddIcon />
      </Fab>
    </ThemeProvider>
  );
};
