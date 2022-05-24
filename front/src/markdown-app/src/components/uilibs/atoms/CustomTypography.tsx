import { FC } from "react";

import { Typography } from "@mui/material";

interface Props {
  text: string;
};

export const CustomTypography: FC<Props> = (props) => {
  const { text } = props;
  return (
    <Typography sx={{color: "white"}}>{text}</Typography>
  );
};