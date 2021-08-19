import React, { useState } from "react";

const TextEditor = () => {
    const [text, setText] = useState();
    let input = document.getElementById("msg");
    // const resultado = document.getElementById("resultado");
    console.log(input, text);

    function etiquetaStrong() {
        const desde = input.selectionStart;
        const hasta = input.selectionEnd;

        const sel = input.value.substring(desde, hasta);

        if (sel.length > 0) {
            // si hay algo seleccionado
            input.setRangeText(`<pre>${sel}</pre>`, desde, hasta, "select");
            input = input.value;
        }
    }
    return (
        <>
            <textarea id="msg" onChange={setText} />
            <button type="button" name="text" onClick={etiquetaStrong}>
                code
            </button>
            <p id="resultado" />
        </>
    );
};

export default TextEditor;
