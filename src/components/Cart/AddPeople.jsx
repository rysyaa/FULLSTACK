import React, { useState } from "react";
import { usePeople } from "../../context/PeopleContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddPeople = () => {
  const { addPeople } = usePeople();
  const navigate = useNavigate()
  const [people, setPeople] = useState({
    name: "",
    surname: "",
    phone: "",
    mail: "",
  });
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
  const newAddPeople = () => {
    if(people.name.trim() === "" || people.surname.trim() === "" || people.phone === "" || people.mail.trim() === ""){
      alert("Заполни");
      return
    }
    addPeople(people)
    navigate('/peoples')
  };
  return (
    <>
      <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <Typography variant="h4">REGISTRATION FOR A TICKET</Typography>
        <TextField
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          name="name"
          onChange={handleInp}
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
        />
        <Button onClick={() => newAddPeople()} fullWidth variant="outlined">
          Add Product
        </Button>
      </Box>
    </>
  );
};

export default AddPeople;
