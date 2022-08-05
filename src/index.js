import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./Components/book.component";
import Characters from "./Components/characters.component";

import Comments from "./Components/comment.component";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/:id" element={<Comments />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>

      {/* <Route path="expenses" element={<Expenses />} /> */}
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
