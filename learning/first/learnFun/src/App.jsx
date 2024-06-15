import './App.css'
import { ErrorMessage } from './components/ErrorMessage'
import { FoodItems } from './components/FoodItems'
import { Student } from './components/Student'
// import { Content } from './components/Content'

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"]
  // let foodItems=[]

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
    </>
  )
}

export default App