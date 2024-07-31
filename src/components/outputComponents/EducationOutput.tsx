import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StateInterface } from "../../types";

const EducationOutput = () => {
  const education = useSelector((state: StateInterface) => state.education);
  return (
    <Box
      sx={{
        // reduce width and center TODO
        mt: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ backgroundColor: "grey", width: "80%" }}>
        Education
      </Typography>
      {education &&
        education.map((e) => {
          return (
            <Box
              key={e.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
                mt: 2,
              }}
            >
              <Box sx={{ flex: 1, m: 2 }}>
                <Typography>{e.endDate && `Ended: ${e.endDate}`}</Typography>
                <Typography>
                  {e.startDate && `Started: ${e.startDate}`}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ textAlign: "left", mt: 1 }} variant="h4">
                  {e.school}
                </Typography>
                <Typography sx={{ textAlign: "left" }}>{e.degree}</Typography>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default EducationOutput;
