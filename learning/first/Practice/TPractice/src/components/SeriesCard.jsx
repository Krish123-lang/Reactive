import SeriesData from '../api/SeriesData.json'
import { DisplayCard } from './DisplayCard'

export const SeriesCard = () => {
    return (
        <>
            <ul className="grid grid-three--cols">
                {
                    SeriesData.map(curElem => (
                        <DisplayCard key={curElem.id} data={curElem} />
                    ))
                }
            </ul>
        </>
    )
}