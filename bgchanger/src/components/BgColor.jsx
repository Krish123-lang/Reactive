import React from 'react'

const BgColor = () => {
    function blue() {
        document.body.style.backgroundColor = 'blue';
    }
    function brown() {
        document.body.style.backgroundColor = 'brown';
    }
    function green() {
        document.body.style.backgroundColor = 'green';
    }
    function red() {
        document.body.style.backgroundColor = 'red';
    }
    function purple() {
        document.body.style.backgroundColor = 'purple';
    }
    function yellow() {
        document.body.style.backgroundColor = 'yellow';
    }
    return (
        <>
            <button onClick={() => blue()}>Blue</button>
            <button onClick={() => brown()}>Brown</button>
            <button onClick={() => green()}>Green</button>
            <button onClick={() => red()}>Red</button>
            <button onClick={() => purple()}>Purple</button>
            <button onClick={() => yellow()}>Yellow</button>
        </>
    )
}

export default BgColor