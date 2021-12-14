import "./styles.css";
import { useState } from "react";

export default function App() {
  const [available, setAvailable] = useState();
  const CoolComponent = () => <div>I am so cool</div>;
  return (
    <div className="App">
      <button onClick={() => setAvailable((a) => !a)}>change color</button>
      <h2 style={{ color: available ? "red" : "blue" }}>
        Start editing to see some magic happen!
      </h2>
      <CoolComponent />
    </div>
  );
}
