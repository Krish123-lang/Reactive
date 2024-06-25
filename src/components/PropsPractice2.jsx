export const PropsPractice2 = (props) => {
    return (
        <>
            <li>
                <img src={props.curElem.img_url} alt={props.curElem.name} width={150} />
                <h2>{props.curElem.name}</h2>
            </li>
        </>
    )
}