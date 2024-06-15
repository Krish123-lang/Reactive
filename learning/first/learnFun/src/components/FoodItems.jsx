import { Items } from "./Items"

export const FoodItems = ({ items }) => {

    return (
        <ul>
            {items.map((item) => (
                <Items key={item} foodItem={item} />
            ))}
        </ul>
    )
}