import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => { return slowFunction(number) }, [number])
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <>
            <hr /><br />
            <input type="number" name="number" id="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 100000; i++) { }
    return num * 2
}
export default Memo