import React, { useEffect, useState } from 'react'
import Button from './Button'

const Effect = () => {
    const [Joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div className="joke">
            <Button callApi={fetchApi} />
            <p>{Joke}</p>
        </div>
    );
}

export default Effect