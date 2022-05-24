import React, { FC } from "react";

import { CustomTypography } from "../atoms/CustomTypography";
import { CustomTextField } from "../atoms/CustomTextField";

interface Props {
  editMode: boolean;
  label: string;
  value: string;
  text: string;
  onChangeValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const SwitchTextFieldTypography: FC<Props> = (props) => {

  const { editMode, label, value, text, onChangeValue } = props;

  return (
    <>
      {editMode ? <CustomTextField label={label} value={value} onChangeValue={onChangeValue} /> : <CustomTypography text={text} />}
    </>
  );
};