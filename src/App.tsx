import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ButtonsHeader from "./components/ButtonsHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="inputContainer">
        <ButtonsHeader />
        <PersonalDetails />
        <div>work experience</div>
        <div>education</div>
        <div>skills</div>
      </div>
      <div className="outputContainer"></div>
    </div>
  );
}

export default App;
