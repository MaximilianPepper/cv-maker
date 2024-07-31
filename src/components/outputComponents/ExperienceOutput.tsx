import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StateInterface } from "../../types";

const ExperienceOutput = () => {
  const work = useSelector((state: StateInterface) => state.experience);
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
        Work Experience
      </Typography>
      {work &&
        work.map((w) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
                mt: 2,
              }}
            >
              <Box sx={{ flex: 1, m: 2 }}>
                <Typography>{w.endDate && `Ended: ${w.endDate}`}</Typography>
                <Typography>
                  {w.startDate && `Started: ${w.startDate}`}
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
                  {w.company}
                </Typography>
                <Typography sx={{ textAlign: "left" }}>{w.role}</Typography>
                <Typography sx={{ textAlign: "left", mt: 1 }}>
                  {w.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default ExperienceOutput;
