import { useState } from 'react';

export function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        // alert("You clicked me !")
        setCount(count + 1);

    }
    return (
        <>
            <p>You clicked me <b> {count} times ! </b> </p>
            <button className="btn" onClick={handleClick}>Click Me</button>
            <br /> <br />
            <button className="btn" onClick={handleClick}>Click Me</button>
        </>
    )
}