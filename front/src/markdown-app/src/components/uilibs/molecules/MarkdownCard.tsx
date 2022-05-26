import { FC } from "react";

import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  Grid
} from "@mui/material";

import { MarkdownType } from "../../../types/MarkdownType.type";
import { useNavigate } from "react-router-dom";

interface Prpps {
  markdown: MarkdownType;
}

export const MarkdownCard: FC<Prpps> = (props) => {

  const { markdown } = props;

  const navigate = useNavigate();

  const onClickLink = () => { navigate(markdown.url) };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card color="secondary" sx={{ minWidth: 275, height: 300, }}>
        <CardContent sx={{ minWidth: 275, height: 150, overflow: "hidden" }} >
          <Typography variant="h5" component="div" sx={{ paddingBottom: "20px" }}>
            {markdown.title}
          </Typography>
          <Typography variant="body1" >
            {markdown.body}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "20px 10px"}}>
          <Button size="small" variant="contained" color='secondary' onClick={onClickLink} >もっと見る</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
