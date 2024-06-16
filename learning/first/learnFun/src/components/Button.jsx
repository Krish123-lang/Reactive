export function Button() {
    // const handleClick = () => console.log("Ouch")
    // const handleClick2 = (name) => console.log(`${name} ! stop clicking me`)
    // return (
    //     <>
    //         <button onClick={() => handleClick()}>Click me</button>
    //     </>
    // )

    // ==================================================================================
    // let count = 0
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times!`)
    //     }
    //     else {
    //         console.log(`${name}! Stop clicking me`)
    //     }
    // }


    // return (
    //     <button onClick={() => handleClick("Krishna")}>Click me</button>
    // )

    // ==================================================================================

    // const handleClick = (e) => e.target.textContent = "Ouch";
    // return (
    //     <button onClick={(e) => handleClick(e)}>click me</button>
    // )
    // ==================================================================================

    const imageURL = './src/assets/image.jpeg';
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img src={imageURL} alt="" onClick={(e) => handleClick(e)} width="150px"/>
    )
}