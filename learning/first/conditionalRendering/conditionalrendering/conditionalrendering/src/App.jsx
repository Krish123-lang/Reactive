import { Item } from "./components/Items"

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Item name="Space Suit" isPacked={true} />
      <Item name="Football" isPacked={true} />
      <Item name="Bottle" isPacked={false} />
    </>
  )
}

export default App
