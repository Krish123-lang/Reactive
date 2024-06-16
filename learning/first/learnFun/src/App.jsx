import './App.css'
import { Button } from './components/Button'
import { ErrorMessage } from './components/ErrorMessage'
import { FoodItems } from './components/FoodItems'
import { List } from './components/List'
import { Student } from './components/Student'
import { UserGreeting } from './components/UserGreeting'
// import { Content } from './components/Content'

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"]
  // let foodItems=[]

  // Array of strings
  const fruits = ["apple", "banana", "cherry", "Dates", "Engkala"];

  // Array of objects
  const anotherFruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "cherry", calories: 59 },
    { id: 4, name: "dates", calories: 15 },
    { id: 5, name: "engkala", calories: 120 },
  ]
  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 65 },
    { id: 10, name: "brocolli", calories: 50 },
  ]

  return (
    <>
      {/* <Content /> */}
      {/* <p> {foodItems} </p> */}

      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />

      <Student name="Krishna" age={24} isStudent={true} />
      <Student name="Bob" age={24} isStudent={true} />
      <Student name="Andrew Tate" age={30} isStudent={false} />
      <Student name="Musk" age={45} isStudent={false} />
      <Student name="Modi" age={90} isStudent={false} />

      <UserGreeting isLoggedIn={true} username="Krishna" />

      {anotherFruits.length > 0 && <List items={anotherFruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

      <Button />
    </>
  )
}

export default App