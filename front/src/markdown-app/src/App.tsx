import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Markdown } from "./components/pages/Markdown";
import { Top } from "./components/pages/Top";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="*" element={<Markdown />} />
      </Routes>
    </BrowserRouter>
  );
}
