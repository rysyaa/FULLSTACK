import React, { useEffect } from "react";
import { usePeople } from "../../context/PeopleContextProvider";
import Ticket from "./Ticket";
import { Box } from "@mui/material";

const People = () => {
  const { people, getPeople } = usePeople();

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "0.6em", fontSize: "3em"}}>Your ticket requests</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "2rem",
          justifyContent: "space-evenly",
        }}
      >
        {people.map((item) => (
          <Ticket key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};

export default People;
