import React from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import MyCounterA from "./plugins/MyCounterA";
import MyCounterB from "./plugins/MyCounterB";
import HandleFullScreen from "./plugins/HandleFullScreen";

Editor.use(MyCounterA, {
  start: 2
});
Editor.use(MyCounterB, {
  start: 3
});
Editor.use(HandleFullScreen);

export default function App() {
  const mdEditor = React.useRef(null);

  const handleClick = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get value</button>
      <Editor
        ref={mdEditor}
        style={{
          height: "500px"
        }}
        renderHTML={(text) => <ReactMarkdown source={text} />}
      />
    </div>
  );
}
