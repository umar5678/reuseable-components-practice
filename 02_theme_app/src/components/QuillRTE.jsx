import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import "./quill.css"

const QuillRTE = () => {
  const [value, setValue] = useState(localStorage.getItem("content") || "");

  const handleChange = (delta, content, source, editor) => {
    setValue(editor.getHTML());
    localStorage.setItem("content", editor.getHTML());
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["code-block"],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",

    "code-block",
  ];
  console.log(value);
  return (
    <div>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={handleChange}
      />
      <div>{parse(value)}</div>
    </div>
  );
};

export default QuillRTE;

// editor.getHTML() returns the HTML content of the editor.
// parse(delta) returns the HTML content of the editor.
// parse(value) returns the HTML content of the editor.
// parse(content) returns the HTML content of the editor.
