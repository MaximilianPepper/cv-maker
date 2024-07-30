import { useState, FormEvent, useEffect } from "react";
import { Box, FormControl, FormGroup, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateExperience } from "../actions/experienceActions";
import { ExperienceInterface } from "../types";

interface EditExperienceFormProps {
  data: ExperienceInterface;
  close(): void;
}
function EditExperienceForm({ data, close }: EditExperienceFormProps) {
  const [company, setCompany] = useState(data.company);
  const [role, setRole] = useState(data.role);
  const [description, setDescription] = useState(data.description);
  const [startDate, setStartDate] = useState(data.startDate);
  const [endDate, setEndDate] = useState(data.endDate);
  const dispatch = useDispatch();
  const id = data.id;

  useEffect(() => {
    setCompany(data.company);
    setRole(data.role);
    setDescription(data.description);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
  }, [data]);
  // change events
  const changeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };
  const changeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };
  const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const changeStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };
  const changeEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const submitExperience = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      company,
      role,
      description,
      startDate,
      endDate,
      id,
    };
    console.log(data);

    dispatch(updateExperience(data));
    close();
  };
  return (
    <div>
      {" "}
      <Box
        onSubmit={submitExperience}
        component="form"
        sx={{ width: "300px", margin: "0 auto", mt: 4 }}
      >
        <FormControl component="fieldset" fullWidth>
          <FormGroup>
            <TextField
              label="Company"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Fake Company"
              value={company}
              onChange={changeCompany}
            />
            <TextField
              label="Role"
              variant="outlined"
              margin="normal"
              fullWidth
              type="text"
              placeholder="full stack developer"
              value={role}
              onChange={changeRole}
            />
            <TextField
              label="description"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              type="text"
              placeholder="Designed a website but unfortunately it broke and i got fired"
              value={description}
              onChange={changeDescription}
            />
            <TextField
              label="start date"
              variant="outlined"
              margin="normal"
              fullWidth
              type="date"
              value={startDate}
              onChange={changeStartDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="end date"
              variant="outlined"
              margin="normal"
              fullWidth
              type="date"
              value={endDate}
              onChange={changeEndDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </FormGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default EditExperienceForm;
