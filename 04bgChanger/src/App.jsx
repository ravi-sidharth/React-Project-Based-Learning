import { useState } from "react";

import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-end bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 items-center shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
