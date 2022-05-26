import { FC } from "react";

import { Typography } from "@mui/material";
import { Theme } from "../theme/Theme";

interface Props {
  text: string;
};

export const CustomTypography: FC<Props> = (props) => {
  const { text } = props;
  return (
    <Typography sx={{ color: Theme.palette.secondary.contrastText }}>{text}</Typography>
  );
};