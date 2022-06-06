import { FC } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { TagInputText } from "../atoms/TagInputText";

interface Props {
  tags: String[];
  setTags: React.Dispatch<React.SetStateAction<String[]>>;
  tagOpen: boolean;
  setTagOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tagDialogUpdate: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * タグを登録できるダイアログ.
 * @param props 
 * @returns 
 */
export const TagDaialog: FC<Props> = (props) => {

  const { tags, setTags, tagOpen, setTagOpen, tagDialogUpdate } = props;

  const tagDialogClose = () => { setTagOpen(false) }

  return (
    <Dialog open={tagOpen} onClose={tagDialogClose} maxWidth={"lg"} fullWidth>
      <DialogTitle>タグ</DialogTitle>
      <DialogContent>
        <TagInputText tags={tags} setTags={setTags} />
      </DialogContent>
      <DialogActions>
        <Button onClick={tagDialogClose}>キャンセル</Button>
        <Button onClick={tagDialogUpdate}>登録</Button>
      </DialogActions>
    </Dialog>
  );
};