import { useSelector } from "react-redux";
import { StateInterface } from "../../types";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Header = () => {
  const header = useSelector((state: StateInterface) => state.personalInfo);
  return (
    <div className="header">
      <Typography variant="h2">{header.name}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "30px",
        }}
      >
        {header.email && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EmailIcon />
            <div>{header.email}</div>
          </div>
        )}
        {header.phone && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PhoneIcon />
            <div>{header.phone}</div>
          </div>
        )}
        {header.location && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LocationOnIcon />
            <div>{header.location}</div>
          </div>
        )}
        {header.website && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LanguageIcon />
            <div>{header.website}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
