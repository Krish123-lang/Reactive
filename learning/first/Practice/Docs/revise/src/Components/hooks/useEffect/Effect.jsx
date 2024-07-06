import { useEffect, useState } from "react"

export const Effect = () => {
    const [count, setCount] = useState(0)
    const [bgcolor, setBgColor] = useState("green")
    const [width, setWidth] = useState(window.screen.width)
    const [height, setHeight] = useState(window.screen.height)


    // useEffect(() => {
    //     alert("Hello world")
    //     return ()=>{
    //         alert("component was unmounted") 
    //     }
    // }, [])

    // useEffect(() => {
    //     alert("Count was changed !")
    // }, [count])

    // To increase/decrease counter
    useEffect(() => {
        document.title = `Count: ${count} - ${bgcolor} `
    }, [count, bgcolor])

    useEffect(() => {
        document.title = `Size: ${width}x${height}`
    }, [width, height])

    // To set the width/height of screen
    const currentwidth = () => {
        setWidth(() => window.innerWidth)
    }
    const currentheight = () => {
        setHeight(() => window.innerHeight)
    }

    // To change the width/height value of the screen on resize
    useEffect(() => {
        addEventListener("resize", currentwidth)
        return () => {
            removeEventListener("resize", currentwidth)
        }
    })
    useEffect(() => {
        addEventListener("resize", currentheight)
        return () => {
            removeEventListener("resize", currentheight)
        }
    })

    return (
        <>
            <p style={{ backgroundColor: bgcolor }}>{count}</p> <br />
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Minus</button>

            <h1>The size of your screen is : {width}</h1>
            <h1>The size of your screen is : {height}</h1>

            <button onClick={() => setBgColor(bgcolor === "green" ? "red" : "green")}>Change Color</button>
        </>
    )
}