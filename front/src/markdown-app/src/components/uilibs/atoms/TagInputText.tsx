import { FC } from "react"
import { Autocomplete, TextField } from "@mui/material";

interface Props {
  tags: Array<String>;
  setTags: React.Dispatch<React.SetStateAction<String[]>>;
}

/**
 * タグを登録できるテキストフィールド.
 * @param props 
 * @returns 
 */
export const TagInputText: FC<Props> = (props) => {

  const { tags, setTags } = props;

  const onChangeTag = (event: React.SyntheticEvent, values: String[]) => {
    setTags(values);
  };

  return (
    <Autocomplete
      freeSolo
      multiple
      onChange={onChangeTag}
      options={tags}
      defaultValue={tags}
      value={tags}
      renderInput={(params) => (
        <TextField
          {...params}
          label="タグ"
          fullWidth
          variant="standard"
        />
      )}
    />
  );
};