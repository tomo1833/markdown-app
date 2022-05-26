import { FC } from "react";

import { TextField } from "@mui/material";
import { Theme } from "../theme/Theme";

interface Props {
  label: String;
  value: String;
  onChangeValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};


export const CustomTextField: FC<Props> = (props) => {
  const { label, value, onChangeValue } = props;
  return (
    <TextField InputLabelProps={{style: { color: Theme.palette.secondary.contrastText, borderColor: Theme.palette.secondary.contrastText } }} inputProps={{ style: { color: Theme.palette.secondary.contrastText } }} label={label} value={value} onChange={onChangeValue} />
  );
};