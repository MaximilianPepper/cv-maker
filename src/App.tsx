import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ButtonsHeader from "./components/ButtonsHeader";
import Output from "./components/Output";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="container">
      <div className="inputContainer">
        <ButtonsHeader />
        <PersonalDetails />
        <WorkExperience />
        <div>education</div>
        <div>skills</div>
      </div>

      <div className="outputContainer">
        <Output />
      </div>
    </div>
  );
}

export default App;
