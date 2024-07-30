import { useState, FormEvent } from "react";
import {
  Typography,
  Collapse,
  Box,
  IconButton,
  FormControl,
  FormGroup,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useDispatch } from "react-redux";
import { setPersonalDetails } from "../actions/personalInfoActions";

function PersonalDetails() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const handleToggle = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();

  // change events
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const changeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const changeWebsite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };

  const submitPersonalInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      location,
      website,
    };
    console.log(data);

    dispatch(setPersonalDetails(data));
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
        <Typography>Personal Details</Typography>
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
        <Box
          onSubmit={submitPersonalInfo}
          component="form"
          sx={{ width: "300px", margin: "0 auto", mt: 4 }}
        >
          <FormControl component="fieldset" fullWidth>
            <FormGroup>
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Jon Smith"
                value={name}
                onChange={changeName}
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                type="email"
                placeholder="emailfake@gmail.com"
                value={email}
                onChange={changeEmail}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                fullWidth
                type="tel"
                placeholder="+39 347 1054499"
                value={phone}
                onChange={changePhone}
              />
              <TextField
                label="Location"
                variant="outlined"
                margin="normal"
                fullWidth
                type="text"
                placeholder="Rome, Italy"
                value={location}
                onChange={changeLocation}
              />
              <TextField
                label="website"
                variant="outlined"
                margin="normal"
                fullWidth
                type="url"
                placeholder="https://github.com/MaximilianPepper"
                value={website}
                onChange={changeWebsite}
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
      </Collapse>
    </div>
  );
}

export default PersonalDetails;
