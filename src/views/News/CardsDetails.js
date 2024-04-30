import { Box } from "@mui/system";
import React, { useState } from "react";
import { DETAILS_TABS_LIST } from "../../shared/Constants";
import CustomTabs from "../../shared/CustomTabs";
import { DoShow } from "../../shared/DoShow";
import FounderDetails from "./FounderDetails";
import FounderHeaderDetails from "./FounderHeaderDetails";
import NotesDetails from "./NotesDetails";

const CardsDetails = (props) => {
  const { showCardId } = props;
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <FounderHeaderDetails showCardId={showCardId} />
      <CustomTabs
        value={value}
        tabsList={DETAILS_TABS_LIST}
        handleChange={handleChange}
      />
      <DoShow show={value === 2}>
        <FounderDetails />
      </DoShow>
      <DoShow show={value === 5}>
        <NotesDetails />
      </DoShow>
    </Box>
  );
};

export default CardsDetails;
