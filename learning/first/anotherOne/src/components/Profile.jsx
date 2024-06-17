import { getImageUrl } from "./util"

// function Profile(props) {
export function Profile(props) {
    return (
        <>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" width={150} height={150} />

            <ul>
                <h1>{props.title}</h1>
                <li>Amazing scientist</li>
                <h1> {props.name} </h1>
                <h1> {props.age} </h1>
            </ul>

        </>
    )
}

export function Avatar({ person, size }) {
    return (
        <>
            <h1> {person.name} {size} </h1>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    )
}