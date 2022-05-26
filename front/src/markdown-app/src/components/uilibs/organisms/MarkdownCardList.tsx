import { FC } from "react";

import { Grid } from "@mui/material";

import { MarkdownType } from "../../../types/MarkdownType.type";
import { MarkdownCard } from "../molecules/MarkdownCard";

interface Props {
  markdowns: Array<MarkdownType>;
}

export const MarkdownCardList: FC<Props> = (props) => {

  const { markdowns } = props;

  return (
    <Grid container spacing={2}>
      {markdowns.map((markdown) => { return <MarkdownCard key={markdown.url} markdown={markdown} /> })}
    </Grid>
  );
};
