import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(7);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);

  const passwordRef = useRef(null)

  const paswwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str = str + "0123456789";
    if (characters) str = str + "!@#$%^&*()_+-=/.|{}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, characters, number]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,7);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    paswwordgenerator()
  },[length,number,characters,paswwordgenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overlow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
        onClick={
          copyPassword
        }
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={7}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characters}
            id="characterInput"
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label>Charcaters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
