import { FC } from "react";

import { TextField } from "@mui/material";

interface Props {
  label: String;
  value: String;
  onChangeValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const CustomTextField: FC<Props> = (props) => {
  const { label, value, onChangeValue } = props;
  return (
    <TextField label={label} value={value} onChange={onChangeValue} />
  );
};