import { useState } from "react";
import Navbar from "./components/Navbar";

let x = "HelloReact!";

let array = ["user1", "user2", "user3", "user4", "user5"];

let data = "man";

let y = 0;

const App = () => {
  const [z, setz] = useState(0);

  const btnClick = () => {
    console.log("Click");

    setz(z + 1);

    y++;

    console.log("y =", y);
    console.log("z =", z);
  };

  return (
    <div>
      <Navbar />
      {/* EXAMPLE 1 */}
      {x}

      {/* EXAMPLE 2 */}
      {array.map((user) => {
        return <h2 key={user}>{user}</h2>;
      })}

      {/* EXAMPLE 3 */}
      {data === "man" ? <h1>Man</h1> : <h1>Woman</h1>}

      {/* EXAMPLE 4*/}

      {z}
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
