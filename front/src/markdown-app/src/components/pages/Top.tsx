import { FC, useEffect, useState } from "react";
import axios from "axios";
import { MarkdownType } from "../../types/MarkdownType.type";
import { TopTemplate } from "../templates/TopTemplate";

export const Top: FC = () => {

  const [markdowns, setMarkdowns] = useState<Array<MarkdownType>>([]);

  useEffect(() => {
    axios.get<Array<MarkdownType>>("http://localhost:5000/markdown")
      .then(res => { setMarkdowns(res.data) })
  }, [])

  return (
    <TopTemplate markdowns={markdowns} />
  )
}