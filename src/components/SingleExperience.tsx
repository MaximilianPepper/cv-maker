import { useState } from "react";
import EditExperienceForm from "./EditExperienceForm";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteExperience } from "../actions/experienceActions";
import { useDispatch } from "react-redux";
import { ExperienceInterface } from "../types";

interface SingleExperienceProps {
  exp: ExperienceInterface;
}
function SingleExperience({ exp }: SingleExperienceProps) {
  const [openEditForm, setOpenEditForm] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (exp: ExperienceInterface) => {
    dispatch(deleteExperience(exp));
  };

  const handleToggleEditForm = () => {
    setOpenEditForm(!openEditForm);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "5px",
        }}
      >
        <div>{exp.company}</div>
        <div>
          <IconButton color="primary" onClick={handleToggleEditForm}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDelete(exp)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Box>
      {openEditForm && (
        <EditExperienceForm data={exp} close={handleToggleEditForm} />
      )}
    </>
  );
}

export default SingleExperience;
