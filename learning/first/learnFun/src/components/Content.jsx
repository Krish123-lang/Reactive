import { MyButton } from "./MyButtons";

export function Content() {
    let user = {
        "user": "Krishna",
        "imgURL": "https://th.bing.com/th/id/OIP.amEbZWd9JRcIxkyVtYNODwHaE8?rs=1&pid=ImgDetMain"
    }

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map(product =>
        <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
            {product.id}. {product.title}
        </li>
    )

    return (
        <>
            <img className="avatar" src={user.imgURL} alt={'Photo of' + user.name} />
            <h1>This is {user.user}</h1>
            <p>This is my button</p>
            <MyButton />

            <ul>{listItems}</ul>
        </>
    )
}