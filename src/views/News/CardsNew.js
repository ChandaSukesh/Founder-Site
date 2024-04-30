import { Box } from "@mui/system";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { NEW_CARD_LIST } from "../../shared/Constants";

const CardsNew = (props) => {
  const { handleClick } = props;
  return (
    <Box>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {NEW_CARD_LIST?.map((ele) => {
          return (
            <Card
              key={ele?.id}
              elevation={0}
              sx={{
                border: "1px solid black",
                width: "auto",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F1F4F8",
                },
              }}
              onClick={(e) => handleClick(ele?.id)}
            >
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={ele?.logo}
                    alt="Logo"
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
                        fontSize: "18px",
                      }}
                    >
                      {ele?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#47576A",
                        fontWeight: 400,
                        textAlign: "left",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {ele?.source}
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
                      {ele?.badge}
                    </Typography>
                  </Box>
                </div>

                <Typography
                  sx={{
                    fontWeight: 400,
                    textAlign: "left",
                    marginTop: "0.5rem",
                  }}
                >
                  {ele?.description}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "#47576A",
                    marginTop: "0.5rem",
                  }}
                >
                  Added By: {ele?.addedBy}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Box>
  );
};

export default CardsNew;
