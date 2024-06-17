import { listItem, chemists } from './components/Data'
import { People } from "./components/People"

function App() {

  const anotherListItems = chemists.map(anotherperson =>
    <li key={anotherperson.id}>
      <p>
        <b>{anotherperson.name}:</b>
        {' ' + anotherperson.profession + ' '}
      </p>
    </li>
  );

  return (
    <>
      <People listItem={listItem} anotherListItems={anotherListItems} />
    </>
  )
}

export default App
