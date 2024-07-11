import React, { useEffect, useRef } from 'react'

const Ref = ({ count }) => {
    const a = useRef(0)
    const btnRef = useRef()

    useEffect(() => {
        document.title = count
        a.current = a.current + 1
        console.log(`rerendering not: ${a.current}`)
        btnRef.current.style.backgroundColor = "red";
    })

    return (
        <>
            <div>Ref</div>
            <button ref={btnRef} >Click</button>
        </>
    )
}

export default Ref