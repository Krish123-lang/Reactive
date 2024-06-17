export function Item({ name, isPacked }) {
    return (
        <>
            <li>{isPacked ? (<del> {name + " V"}</del>): name + " X"}</li>
        </>
    )
}