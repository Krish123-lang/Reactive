export const PropsPractice = ({ curElem }) => {

    const { id, name, img_url, rating, description, cast, genre, watch_url } = curElem;

    return (
        <>
            <li>
                <img src={img_url} alt={name} width={150} height={100} />
                <h1>{name}</h1>
                <p>{description}</p>
                <b>{rating}</b>
                <p>{cast}</p>
                <p>{genre}</p>
                <a href={watch_url} target="_blank"><button>Watch now</button></a>
            </li>
        </>
    )
}