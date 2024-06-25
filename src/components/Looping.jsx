import Data from '../api/Data.json'
import { PropsPractice } from './PropsPractice'
import { PropsPractice2 } from './PropsPractice2'
export const TestMap = () => {
    return (
        <>
            <h1>Test Map</h1>

            <ol>
                {
                    // Data.map(curElem => (
                    //     <PropsPractice key={curElem.id} curElem={curElem} />
                    // ))

                    Data.map(curElem => (
                        <PropsPractice2 key={curElem.id} curElem={curElem} />
                    ))
                }
            </ol>
        </>
    )
}