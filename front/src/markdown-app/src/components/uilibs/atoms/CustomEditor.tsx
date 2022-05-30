import React, { FC, ReactNode, useRef } from "react";

import { MarkdownType } from "../../../types/MarkdownType.type";

interface Props {
  markdown: MarkdownType;
  onChangeValue: (value: string) => void;
};

export const CustomEditor: FC<Props> = (props) => {
  const { markdown, onChangeValue } = props;

  const defalutValue = useRef(markdown.body.split("\n").map((value: string, index: React.Key) => { return React.createElement('div', { key: index }, value !== "" ? value : "\n") }));

  const reactNode = defalutValue.current;

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    onChangeValue(e.currentTarget.innerText);
  };

  return (
    <div
      style={{ backgroundColor: "#000000", color: "#ffffff", width: "100%", height: "100%" }}
    >
      <div
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning={true}
      >
        {reactNode}
      </div>
    </div>
  );
};
