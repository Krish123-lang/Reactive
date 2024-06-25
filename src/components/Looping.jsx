import Data from '../api/Data.json'
export const TestMap = () => {
    return (
        <>
            <h1>Test Map</h1>

            <ol>
                {
                    Data.map(curElem => {
                        return (
                            <>
                                <li key={curElem.id}>
                                    <img src={curElem.img_url} alt={curElem.name} width={150} height={100} />
                                    <h1> {curElem.name} </h1>
                                    <p>{curElem.description}</p>
                                    <b>{curElem.rating}</b>
                                    <p>{curElem.cast}</p>
                                    <p>{curElem.genre}</p>
                                    <a href={curElem.watch_url} target="_blank">
                                        <button>Watch now</button>
                                    </a>
                                </li>
                                <br />
                            </>
                        )
                    })
                }
            </ol>
        </>
    )
}