import { SeriesCard } from "./components/SeriesCard"
// import './components/Series.css'
import './components/Series.module.css'

const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">Series Data</h1>
      <SeriesCard />
    </section>
  )
}
export default App