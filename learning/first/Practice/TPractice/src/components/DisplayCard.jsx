import styles from './Series.module.css'
import styled from 'styled-components'

export const DisplayCard = ({ data }) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data

    const ButtonSeries = styled.button({
        padding: "1.2rem 2.4rem",
        border: 'none',
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
    })

    const Rating = styled.p({
        fontSize: "1.6rem",
        color: "red",
        textTransform: "capitalize",
    })

    const ratingClass = rating > 8.5 ? styles.super_hit : styles.average

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width={150} />
            </div>

            <div className={styles["card-content"]}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{cast}</p>
                <Rating><span className={`${styles.rating} ${ratingClass}`}>{rating}</span></Rating>
                <p>{genre}</p>
                {/* <a href={watch_url}><button> Watch now</button></a> */}
                <a href={watch_url}><ButtonSeries> Watch now</ButtonSeries></a>
            </div>
        </li>
    )
}