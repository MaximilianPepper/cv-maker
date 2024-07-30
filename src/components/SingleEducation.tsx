import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { EducationInterface } from "../types";
import EditEducationForm from "./EditEducationForm";
import { deleteEducation } from "../actions/educationAction";

interface SinglEducationProps {
  edu: EducationInterface;
}
function SingleEducation({ edu }: SinglEducationProps) {
  const [openEditForm, setOpenEditForm] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (edu: EducationInterface) => {
    dispatch(deleteEducation(edu));
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
        <div>{edu.school}</div>
        <div>
          <IconButton color="primary" onClick={handleToggleEditForm}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDelete(edu)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Box>
      {openEditForm && (
        <EditEducationForm edu={edu} close={handleToggleEditForm} />
      )}
    </>
  );
}

export default SingleEducation;
