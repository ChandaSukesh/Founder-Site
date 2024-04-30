import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DeleteIcon } from "../../assests/images/img";
import { DoShow } from "../../shared/DoShow";

const NotesDetails = () => {
  const [value, setValue] = useState("");
  const [storedValues, setStoredValues] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStoredValues([...storedValues, value.trim()]);
    setValue("");
  };
  const onDeleteHandler = (e, indexToRemove) => {
    const updatedItems = storedValues.filter(
      (_, index) => index !== indexToRemove
    );

    setStoredValues(updatedItems);
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: "22px", textAlign: "left" }}>
        Notes
      </Typography>
      <Card
        elevation={0}
        sx={{
          border: "1px solid #F5F3FB",
          width: "100%",
          backgroundColor: "var(--Primary-light-background, #F5F3FB)",
        }}
      >
        <DoShow show={storedValues?.length === 0}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              textAlign: "center",
              color: "#91A3B7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            Start adding notes and tag your team members to start discussion
          </Typography>
        </DoShow>
        <CardContent>
          {storedValues?.map((op, index) => {
            return (
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #F5F3FB",
                  width: "100%",
                  backgroundColor: "white",
                  padding: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    <Box>{op}</Box>
                    {new Date().toDateString()} .{" "}
                    {new Date().toLocaleTimeString()}
                  </Typography>

                  <Avatar
                    alt="Logo"
                    src={DeleteIcon}
                    sx={{
                      width: 30,
                      height: 30,
                      marginTop: "0.2rem",
                      float: "right",
                      marginLeft: "auto",
                    }}
                    onClick={(e) => onDeleteHandler(e, index)}
                  />
                </Box>
              </Card>
            );
          })}
          <form onSubmit={handleSubmit}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="Enter note here and tag team members eg @John"
                variant="outlined"
                fullWidth
                value={value}
                onChange={handleChange}
                style={{ border: "#BDCAD9", backgroundColor: "white" }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  marginLeft: 4,
                  width: "auto",
                  backgroundColor: "#5101A0",
                  color: "white",
                }}
              >
                Add Note
              </Button>
            </CardContent>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NotesDetails;
