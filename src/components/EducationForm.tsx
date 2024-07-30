import { useState, FormEvent } from "react";
import { Box, FormControl, FormGroup, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setEducation } from "../actions/educationAction";

interface EducationFormProps {
  close(): void;
}
function EducationForm({ close }: EducationFormProps) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  // change events
  const changeSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(event.target.value);
  };
  const changeDegree = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(event.target.value);
  };

  const changeStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };
  const changeEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const submitEducation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      school,
      degree,
      startDate,
      endDate,
    };
    console.log(data);

    dispatch(setEducation(data));
    close();
  };
  return (
    <div>
      {" "}
      <Box
        onSubmit={submitEducation}
        component="form"
        sx={{ width: "300px", margin: "0 auto", mt: 4 }}
      >
        <FormControl component="fieldset" fullWidth>
          <FormGroup>
            <TextField
              label="Shool"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Harvard"
              value={school}
              onChange={changeSchool}
            />
            <TextField
              label="Degree"
              variant="outlined"
              margin="normal"
              fullWidth
              type="text"
              placeholder="Computer science"
              value={degree}
              onChange={changeDegree}
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

export default EducationForm;
