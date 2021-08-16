import React, { useState } from "react";

const useStyle = () => {
    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(`<pre><code>${e.target.value}</code></pre>`);
    };

    return (
        <>
            <textarea type="" onChange={handleText} />
            <button
                value="snippet"
                type="button"
                label="insert text"
                onClick={handleStyle}
            />
        </>
    );
};

export default useStyle;
