import React, { useState } from "react";

const TextEditor = () => {
    const [text, setText] = useState("");
    // let input = document.getElementById("msg");
    // const resultado = document.getElementById("resultado");

    function etiquetaStrong(cmd) {
        const desde = text.charAt(text.length - 1);
        console.log(desde);
        text.setRangeText(`${cmd}`, desde, desde, "select");

        etiquetaStrong(`</${cmd}>`);
    }
    return (
        <>
            <textarea id="msg" onChange={setText} />
            <button type="button" name="text" onClick={etiquetaStrong}>
                code
            </button>
            <p id="resultado">{}</p>
        </>
    );
};

export default TextEditor;
