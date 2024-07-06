import React, { useState } from 'react';

export const State = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Doraemon");
    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatpassword, setRepeatPassword] = useState('');

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
            <hr />

            {/* Form */}
            <h1>Register</h1>
            <form action="#" method='post'>
                <input type="text" name="text" id="text" placeholder='Username' onChange={(event) => setUsername(event.target.value)} autoComplete='off' />
                <input type="email" name="email" id="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)} autoComplete='off' />
                <input type="password" name="password" id="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} autoComplete='off' />
                <input type="password" name="repeat-password" id="repeat-password" placeholder='Repeat Password' onChange={(event) => setRepeatPassword(event.target.value)} autoComplete='off' />
                <input type="submit" value="Create Account" />
            </form>

            <p>Username: {username}</p>
            <p>email: {email}</p>
        </>
    );
};
