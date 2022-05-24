import { FC, useState } from "react";
import { EditTemplate } from "../templates/EditTemplate";
import { ViewTemplate } from "../templates/ViewTemplate";

export const Markdown: FC = () => {

  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <>
      {editMode ? <EditTemplate /> : <ViewTemplate />}
      <h1>ホーム</h1>
    </>
  )
}