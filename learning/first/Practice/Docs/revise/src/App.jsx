import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Data from './Components/Data/Data.json'
import { Fragment } from "react";
import { State } from "./Components/hooks/State/State";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      {/* ===================================================== */}
      {/* Cards */}
      {/* {
        Data.map(data => {
          return (
            <Fragment key={data.id}>
              <div className="card-container">
                <Card title={data.title} body={data.body} />
              </div>
            </Fragment>
          )
        }
        )
      } */}
      {/* Cards */}
      {/* ===================================================== */}

      <State />

      {/* <Footer /> */}
    </>
  )
}