import React, { useRef } from "react";
import "./text.css";

const TextEditor = ({ fn }) => {
    const bold = useRef();
    const italic = useRef();
    const code = useRef();
    const input = useRef();

    function handleCommand(e) {
        // attribut value data-... from the buttons
        const command = e.target.dataset.element;

        // this is for snippets
        if (command === "formatBlock") {
            document.execCommand(command, false, "<pre>");
        }
        // execCommand has diferents 'functions' there are more
        document.execCommand(command, false, null);
    }
    function handleText() {
        // Catch the formated text with innerHTML
        fn(input.current.innerHTML);
    }
    return (
        <div className="editor-content">
            <div
                className="input"
                onInput={handleText}
                contentEditable="true"
                ref={input}
            />
            <div className="text-editor">
                <button
                    type="button"
                    className="bttn"
                    ref={bold}
                    data-element="bold"
                    onClick={handleCommand}
                >
                    bold
                </button>
                <button
                    type="button"
                    className="bttn"
                    ref={italic}
                    data-element="italic"
                    onClick={handleCommand}
                >
                    italic
                </button>
                <button
                    type="button"
                    className="bttn"
                    ref={code}
                    data-element="formatBlock"
                    onClick={handleCommand}
                >
                    {"</>"}
                </button>
            </div>
        </div>
    );
};

export default TextEditor;
