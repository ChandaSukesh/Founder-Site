import React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { FOUNDER_CARD_LIST, NEW_CARD_LIST } from "../../shared/Constants";
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Details1,
  Details2,
  Details3,
  Pic1,
} from "../../assests/images/img";

const brandsList = [
  {
    id: 1,
    logo: Brand1,
    title: "Co-Founder & CTO",
    subTitle: "Zeko · Nov 2022 - Present",
  },
  {
    id: 2,
    logo: Brand2,
    title: "Software Engineer",
    subTitle: "Urban Company ·  Feb 2022 - Nov 2022",
  },
  {
    id: 3,
    logo: Brand3,
    title: "Software Development Intern",
    subTitle: "Swiggy ·  Aug 2021 - Dec 2021",
  },
  {
    id: 4,
    logo: Brand2,
    title: "Software Development Intern",
    subTitle: "Urban Company ·  Feb 2021 - Nov 2021",
  },
];

const educationList = [
  {
    id: 1,
    logo: Brand4,
    title: "Birla Institute of Technology & Sciene, Pilani",
    subTitle: "2016 - 2022",
  },
  {
    id: 2,
    logo: Brand4,
    title: "Birla Institute of Technology & Sciene, Pilani",
    subTitle: "2016 - 2021",
  },
];
const FounderDetails = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: "22px", textAlign: "left" }}>
        Founder Details
      </Typography>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {FOUNDER_CARD_LIST?.map((item, index) => {
          return (
            <Card
              key={item?.id}
              elevation={0}
              sx={{
                border: "1px solid black",
                width: "100%",
              }}
            >
              <CardContent sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Box md={3}>
                  <Card sx={{ backgroundColor: "#DFE5ED", padding: "0.8rem" }}>
                    <img
                      src={item?.imgLogo}
                      alt="Logo"
                      style={{ width: 220, height: 220 }}
                    />
                    <Typography
                      sx={{
                        color: "#23303E",
                        fontWeight: 600,
                        textAlign: "left",
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#47576A",
                        fontWeight: 400,
                        textAlign: "left",
                      }}
                    >
                      {item?.description}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        padding: "0.5rem",
                        color: "#5101A0",
                        margin: "1rem",
                      }}
                    >
                      Profile Score 35
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <img
                        src={Details1}
                        alt="Logo"
                        style={{ width: 30, height: 30 }}
                      />
                      <img
                        src={Details2}
                        alt="Logo"
                        style={{ width: 30, height: 30 }}
                      />
                      <img
                        src={Details3}
                        alt="Logo"
                        style={{ width: 30, height: 30 }}
                      />
                    </Box>
                  </Card>
                </Box>
                <Box md={5}>
                  <Typography sx={{ color: "#7E7C7C", textAlign: "left" }}>
                    Experience (6)
                  </Typography>
                  {brandsList?.map((option, index) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 3,
                        }}
                        key={index}
                      >
                        <Box>
                          <Avatar
                            alt="Logo"
                            src={option?.logo}
                            sx={{ width: 30, height: 30, marginTop: "0.2rem" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: "#3D3D3D",
                              fontWeight: 600,
                              textAlign: "left",
                            }}
                          >
                            {option?.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#7E7C7C",
                              fontWeight: 400,
                              textAlign: "left",
                            }}
                          >
                            {option?.subTitle}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box md={4}>
                  <Typography sx={{ color: "#7E7C7C", textAlign: "left" }}>
                    Education (2)
                  </Typography>
                  {educationList?.map((option, index) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 3,
                        }}
                        key={index}
                      >
                        <Box>
                          <Avatar
                            alt="Logo"
                            src={option?.logo}
                            sx={{ width: 30, height: 30, marginTop: "0.2rem" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: "#3D3D3D",
                              fontWeight: 600,
                              textAlign: "left",
                            }}
                          >
                            {option?.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#7E7C7C",
                              fontWeight: 400,
                              textAlign: "left",
                            }}
                          >
                            {option?.subTitle}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Box>
  );
};

export default FounderDetails;
