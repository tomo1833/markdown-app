import { FC } from "react";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useNavigate } from "react-router-dom";

interface Props {
  setUrlLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const LeftNaviagtion: FC<Props> = (props) => {

  const { setUrlLocation } = props;

  const drawerWidth: number = 240;

  const navigate = useNavigate();

  const onClickItem1 = () => { setUrlLocation('勉強'); navigate('勉強') };
  const onClickItem2 = () => { setUrlLocation('プログラミング'); navigate('プログラミング') };
  const onClickItem3 = () => { setUrlLocation('体調管理'); navigate('体調管理') };


  return (
    <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' } }}>
      <Toolbar />
      <Box sx={{ width: drawerWidth, foverflow: 'auto', backgroundColor: "secondary.main", height: "100vh" }}>
        <List component="nav">
          <ListItemButton onClick={onClickItem1} >
            <ListItemIcon sx={{ color: (theme) => theme.palette.primary.contrastText }} >
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: (theme) => theme.palette.primary.contrastText }} primary="勉強" />
          </ListItemButton>
          <ListItemButton onClick={onClickItem2}>
            <ListItemIcon sx={{ color: (theme) => theme.palette.primary.contrastText }}>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: (theme) => theme.palette.primary.contrastText }} primary="プログラミング" />
          </ListItemButton>
          <ListItemButton onClick={onClickItem3}>
            <ListItemIcon sx={{ color: (theme) => theme.palette.primary.contrastText }}>
              <HealthAndSafetyIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: (theme) => theme.palette.primary.contrastText }} primary="体調管理" />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};