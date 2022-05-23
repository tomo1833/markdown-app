import axios from "axios";
import { FC, useEffect, useState } from "react";

export const App: FC = () => {

  type Markdown = {
    url: string
    title: string
    body: string;
  }

  const [markdown, setMarkdown] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/markdown")
      .then(res => { setMarkdown(res.data); })
  }, [])
  return (
    <div>
      {markdown.map((markdown_data: Markdown, index: number) => {
        return (<p key={index} >{markdown_data.title}</p>);
      })}
    </div>
  );
}
