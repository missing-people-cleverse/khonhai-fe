import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 34 }}>
      <CircularProgress sx={{ color: "#FD5C63" }} size="8rem" />
    </Box>
  );
};

export default Loading;
