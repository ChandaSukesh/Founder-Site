import { Box } from "@mui/system";
import React from "react";
import { ComingSoon } from "../assests/images/img";

const EmptyPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img alt="coming soon" src={ComingSoon} />
      </Box>
    </Box>
  );
};

export default EmptyPage;
