import React, { useEffect, useState } from "react";
import { usePeople } from "../../context/PeopleContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EditPeople = () => {
  const { saveEditPeople, getPeopleDetails, peopleDetails } = usePeople();


  const { id } = useParams();

  useEffect(() => {
    getPeopleDetails(id);
  }, []);

  useEffect(() => {
    setPeople(peopleDetails)
  },[peopleDetails])

  const [people, setPeople] = useState(peopleDetails);
  const handleInp = (e) => {
    if (e.target.name === "phone") {
      let obj = {
        ...people,
        [e.target.name]: Number(e.target.value),
      };
      setPeople(obj);
    } else {
      let obj = {
        ...people,
        [e.target.name]: e.target.value,
      };
      setPeople(obj);
    }
  };
  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <Typography variant="h4">EDIT FOR A TICKET</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
          value={people.name || ""}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="surname"
          variant="outlined"
          size="small"
          name="surname"
          onChange={handleInp}
          value={people.surname || ""}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="phone"
          variant="outlined"
          size="small"
          name="phone"
          onChange={handleInp}
          value={people.phone || ""}
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="mail"
          variant="outlined"
          size="small"
          name="mail"
          onChange={handleInp}
          value={people.mail || ""}
        />
        <Button
          onClick={() => saveEditPeople(people)}
          fullWidth
          variant="outlined"
        >
          Save change
        </Button>
      </Box>
    </>
  );
};

export default EditPeople;
