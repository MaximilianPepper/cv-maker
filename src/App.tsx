import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ButtonsHeader from "./components/ButtonsHeader";
import Output from "./components/Output";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

function App() {
  return (
    <div className="container">
      <div className="inputContainer">
        <ButtonsHeader />
        <PersonalDetails />
        <WorkExperience />
        <Education />
        <div>skills</div>
      </div>

      <div className="outputContainer">
        <Output />
      </div>
    </div>
  );
}

export default App;
