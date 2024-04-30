import { Box } from "@mui/system";
import React from "react";

import { Button, Typography } from "@mui/material";
import { NEW_CARD_LIST } from "../../shared/Constants";
import {
  DragIcon,
  EditIcon,
  LinkedInLogo,
  MailLogo,
} from "../../assests/images/img";

const FounderHeaderDetails = (props) => {
  const { showCardId = 0 } = props;
  const cardDetails = NEW_CARD_LIST?.find((ele) => ele?.id === showCardId);
  console.log("suk2", cardDetails);
  return (
    <Box>
      <Box style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <img
          src={cardDetails?.logo}
          alt="Logo00"
          style={{ width: 35, height: 35 }}
        />
        <Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "left",
              marginLeft: "0.5rem",
              color: "#23303E",
              fontWeight: 600,
              fontSize: "22px",
            }}
          >
            {cardDetails?.title}
          </Typography>
          <Typography
            sx={{
              color: "#47576A",
              fontWeight: 400,
              textAlign: "left",
              marginLeft: "0.5rem",
            }}
          >
            {cardDetails?.source}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#47576A",
              fontWeight: 500,
              marginLeft: "0.5rem",
              backgroundColor: "#F1F4F8",
            }}
          >
            {cardDetails?.badge}
          </Typography>
        </Box>
        <Box>
          <img
            src={LinkedInLogo}
            alt="Logo7"
            style={{ width: 35, height: 35 }}
          />
          <img
            src={MailLogo}
            alt="Logo2"
            style={{ width: 35, height: 35, marginLeft: "1rem" }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            src={DragIcon}
            alt="DragIcon"
            style={{ width: 35, height: 35 }}
          />
          <img
            src={EditIcon}
            alt="editIcon"
            style={{ width: 35, height: 35 }}
          />
          <button
            style={{
              backgroundColor: "white",
              color: "#5101A0",
              border: "1px solid #5101A0",
              padding: "0.7rem",
              marginLeft: "auto",
            }}
          >
            Skip
          </button>{" "}
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: "left",
            marginTop: "0.5rem",
            marginLeft: "3.5rem",
          }}
        >
          {cardDetails?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FounderHeaderDetails;
