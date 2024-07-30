import { useState } from "react";
import { Typography, Collapse, IconButton, Button, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SingleEducation from "./SingleEducation";
import { useSelector } from "react-redux";
import { StateInterface } from "../types";
import EducationForm from "./EducationForm";
function Education() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const educationList = useSelector((state: StateInterface) => state.education);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleToggleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div
      style={{
        margin: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "8px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        onClick={handleToggle}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          justifyContent: "space-between",
        }}
      >
        <Typography>Education</Typography>
        <IconButton
          style={{
            marginLeft: "8px",
            padding: 0,
            color: "inherit",
            backgroundColor: "transparent",
          }}
          disableRipple
          disableFocusRipple
        >
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Typography>
      <Collapse in={open}>
        {openForm && <EducationForm close={handleToggleForm} />}
        <Box
          sx={{
            margin: "5px",
          }}
        >
          {educationList &&
            educationList.map((edu) => (
              <SingleEducation edu={edu} key={edu.id} />
            ))}
        </Box>
        {openForm ? (
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2 }}
            onClick={handleToggleForm}
          >
            close
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            onClick={handleToggleForm}
          >
            + Education
          </Button>
        )}
      </Collapse>
    </div>
  );
}

export default Education;
