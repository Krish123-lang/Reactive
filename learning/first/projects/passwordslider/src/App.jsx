import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClick = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <div className="bg-black w-full h-screen">
      <h1 className="text-center text-3xl text-white">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer" onClick={copyPasswordToClick}>copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={128} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="label" className="text-white">Length: ({length})</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="numberInput" className="text-white">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="charInput" className="text-white">Characters</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
