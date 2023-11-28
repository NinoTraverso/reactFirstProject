import Navbar from "./components/Navbar";

let x = "HelloReact!";

let array = ["user1", "user2", "user3", "user4", "user5"];

let data = "man";

const App = () => {
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
    </div>
  );
};

export default App;
