import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Data from './Components/Data/Data.json'
import { Fragment, useState } from "react";
import { State } from "./Components/hooks/State/State";
import { Effect } from "./Components/hooks/useEffect/Effect";
import Callback from "./Components/hooks/Callback/Callback";
import Effect2 from "./Components/hooks/useEffect/Effect2";
import Memo from "./Components/hooks/Memo/Memo";
import Ref from "./Components/hooks/Ref/Ref";


export default function App() {
  const [count, setCount] = useState(0)

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
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {/* === Hooks === */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Effect2 /> */}

      {/* <Memo /> */}

      <Ref count={count} />

      {/* <Callback /> */}
      {/* === Hooks === */}


      {/* <Footer /> */}
    </>
  )
}