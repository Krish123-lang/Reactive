import React, { useState } from 'react';

export const State = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Doraemon");
    const [text, setText] = useState('');

    const trimmedText = text.trim();
    const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const characterCount = text.replace(/\s/g, '').length;

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>minus</button>
            <h1>{name}</h1>
            <button onClick={() => setName("Nobita")}>Change Name</button> <br /><br />

            <textarea name="textarea" value={text} id="textarea" onChange={(event) => setText(event.target.value)}>{text}</textarea>
            <button onClick={() => setText(text.toUpperCase())}>Uppercase</button>
            <button onClick={() => setText(text.toLowerCase())}>Lowercase</button>
            <button onClick={() => setText('')}>Clear</button>
            <hr />

            <p><b>Character Length:</b> {characterCount}</p>
            <p><b>Word Length:</b> {wordCount}</p>
            <hr />
            <h3>Preview</h3>
            <p>{text}</p>
        </>
    );
};
