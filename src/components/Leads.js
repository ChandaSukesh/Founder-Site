import { Typography } from "@mui/material";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import NewPage from "./NewPage";
import CustomTabs from "../shared/CustomTabs";
import { DoShow } from "../shared/DoShow";
import { MAIN_TABS_LIST } from "../shared/Constants";

const Leads = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginLeft: "5rem" }}>
      <Typography sx={{ fontWeight: 400, fontSize: "22px" }}>Leads</Typography>
      <Box sx={{ width: "100%" }}>
        <CustomTabs
          value={value}
          tabsList={MAIN_TABS_LIST}
          handleChange={handleChange}
        />
      </Box>
      <DoShow show={value === 1}>
        <Box>
          <NewPage />
        </Box>
      </DoShow>
    </Box>
  );
};

export default Leads;
