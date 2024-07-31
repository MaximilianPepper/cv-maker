import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import ButtonsHeader from "./components/ButtonsHeader";
import Output from "./components/Output";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import { Paper } from "@mui/material";

function App() {
  return (
    <div className="container">
      <div className="inputContainer">
        <ButtonsHeader />
        <PersonalDetails />
        <WorkExperience />
        <Education />
      </div>

      <Paper
        elevation={9}
        sx={{
          flex: 2,
          height: "1445px",
        }}
      >
        <Output />
      </Paper>
    </div>
  );
}

export default App;
