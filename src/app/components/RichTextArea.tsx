"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

export const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
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
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
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
];

export default function RichTextArea(props: any) {
  const [wysiwyg, setWysiwyg] = useState("");

  return (
    <QuillNoSSRWrapper
      onChange={props.change}
      value={props.value}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Enter Blog Text Content Here"
    />
  );
}
