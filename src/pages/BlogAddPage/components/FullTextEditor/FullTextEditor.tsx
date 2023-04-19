import * as React from "react";
import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import { ReactQuillDiv } from "./style";
import { uploadImage } from "../../../../aws/awsImage";

export type ImageCheck = {
  width: number;
  height: number;
};

interface IProps {
  html: string;
  setFullText: (html: string) => void;
}

const FullTextEditor = ({ html, setFullText }: IProps): JSX.Element => {
  const textInput = useRef(null);

  const handlerImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.click();
    input.onchange = async (e: any) => {
      const files = input.files;
      if (files) {
        Array.from(files).forEach(async (item) => {
          uploadImage(item, item.name, () => {
            const quill = (textInput?.current as any).getEditor(); //获取到编辑器本身
            const cursorPosition = quill.getSelection().index; //获取当前光标位置
            quill.insertEmbed(
              cursorPosition,
              "image",
              `https://leoblogimages.s3.amazonaws.com/${item.name}`
            ); //插入图片
            quill.setSelection(cursorPosition + 1); //光标位置加1
          });
        });
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { codeBlock: true }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link",  "code-block"],
          ["clean"],
        ],
        handlers: {
          image: handlerImage,
        },
      },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <ReactQuillDiv>
      <ReactQuill
        ref={textInput}
        theme={"snow"}
        onChange={(e) => setFullText(e)}
        value={html}
        modules={modules}
        bounds={".app"}
      />
    </ReactQuillDiv>
  );
};

export default FullTextEditor;
