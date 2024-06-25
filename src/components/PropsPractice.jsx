export const PropsPractice = (props) => {
    return (
        <>
            <li>
                <img src={props.curElem.img_url} alt={props.curElem.name} width={150} height={100} />
                <h1>{props.curElem.name}</h1>
                <p>{props.curElem.description}</p>
                <b>{props.curElem.rating}</b>
                <p>{props.curElem.cast}</p>
                <p>{props.curElem.genre}</p>
                <a href={props.curElem.watch_url} target="_blank">
                    <button>Watch now</button>
                </a>
            </li>
        </>
    )
}