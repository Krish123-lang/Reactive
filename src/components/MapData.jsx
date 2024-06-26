import Data2 from '../api/Data2.json';


export const MapData = () => {
    return (
        <>
            <h1>Loop Two</h1>

            <ol>
                {Data2.map(dum => {
                    return (
                        <>
                            <li key={dum.id}>
                                <h3>{dum.name}</h3>
                                <p>@{dum.username}</p>
                                <p>{dum.email}</p>
                                <p>{dum.address.street}</p>
                            </li>
                        </>
                    );
                })}
            </ol>
        </>
    );
};
