import React from 'react'
import "./Card.css"

const Card = ({ title, body }) => {
    return (
        <>
            <div className="card">
                <h1 className='title'>{title}</h1>
                <p className='para1'>{body}</p>
            </div>
        </>
    )
}

export default Card