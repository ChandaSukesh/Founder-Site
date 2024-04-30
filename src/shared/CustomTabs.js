import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CustomTabs = (props) => {
  const { value = 1, tabsList = [], handleChange } = props;
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="#5101A0"
      indicatorColor="#5101A0"
      aria-label="purple tabs"
      sx={{
        color: "#5101A0",
        "& .MuiTabs-indicator": {
          backgroundColor: "#5101A0",
        },
      }}
    >
      {tabsList?.map((option, index) => {
        return <Tab key={index} value={option?.id} label={option?.label} />;
      })}
    </Tabs>
  );
};

export default CustomTabs;
