import PropTypes from 'prop-types'

export function List(props) {
    // Sorting
    // anotherFruits.sort((a, b) => a.name.localeCompare(b.name)); //  Alphabetcal
    // anotherFruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetcal

    // anotherFruits.sort((a, b) => a.calories - b.calories) // Calories Sorting
    // anotherFruits.sort((a, b) => b.calories - a.calories) // Rerverse Calories Sorting


    // const ListItems = fruits.map(fruit => <li key={fruit.name}>{fruit}</li>)
    // const AnotherListItems = anotherFruits.map(anotherfruit => <li key={anotherfruit.id}>{anotherfruit.name}: &nbsp; <b>{anotherfruit.calories}</b></li>)

    // // Filter objects
    // const lowCaloriesFruits = anotherFruits.filter(anotherFruit => anotherFruit.calories < 100);
    // const highCaloriesFruits = anotherFruits.filter(anotherFruit => anotherFruit.calories >= 100);

    // const LowCaloriesItems = lowCaloriesFruits.map(lowCaloriesFruit => <li key={lowCaloriesFruit.id}>{lowCaloriesFruit.name}: &nbsp; <b>{lowCaloriesFruit.calories}</b></li>)
    // const HighCaloriesItems = highCaloriesFruits.map(highCaloriesFruit => <li key={highCaloriesFruit.id}>{highCaloriesFruit.name}: &nbsp; <b>{highCaloriesFruit.calories}</b></li>)

    const category = props.category;
    const itemList = props.items;
    const anotherlistitems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b> {item.calories} </b>
    </li>);


    return (
        <>
            {/* <ol key={ListItems}> {ListItems} </ol>
            <ol key={AnotherListItems}> {AnotherListItems} </ol>

            <ol key={LowCaloriesItems}> {LowCaloriesItems} </ol>
            <ol key={HighCaloriesItems}> {HighCaloriesItems} </ol> */}

            <h1>{category}</h1>
            <ol>{anotherlistitems}</ol>
        </>
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}