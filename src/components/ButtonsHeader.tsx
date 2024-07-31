import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { education, experience, personalInfo } from "../template";
import { setPersonalDetails } from "../actions/personalInfoActions";
import { setExperience } from "../actions/experienceActions";
import { setEducation } from "../actions/educationAction";

const ButtonsHeader = () => {
  const templateInfo = personalInfo;
  const templateExperience = experience;
  const templateEducation = education;
  const dispatch = useDispatch();
  const displayTemplate = () => {
    dispatch(setPersonalDetails(templateInfo));
    templateExperience.map((e) => dispatch(setExperience(e)));
    templateEducation.map((e) => dispatch(setEducation(e)));
  };

  return (
    <Box>
      <Button variant="outlined" sx={{ mr: 2 }}>
        Clear
      </Button>
      <Button onClick={displayTemplate} variant="outlined">
        Fill Template
      </Button>
    </Box>
  );
};

export default ButtonsHeader;
