import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { usePeople } from "../../context/PeopleContextProvider";
import { useNavigate } from "react-router-dom";
import "./Cart.css"
export default function Ticket({ item }) {
  const { deletePeople } = usePeople();
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "1em 0"}} sx={{ width: 345, minHeight: "200px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {item.name}
          </Typography>
          <Typography gutterBottom variant="h5">
            Surname: {item.surname}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Mail: {item.mail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {item.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
          <Button size="small" style={{marginLeft: 0}} onClick={() => deletePeople(item.id)}>
            Delete
          </Button>
          <h5 style={{backgroundColor: "green", padding: "0.4em", borderRadius: "0.4em", marginLeft: "14px"}}>Application successfully sent</h5>
        </CardActions>
      </Card>
    </div>
  );
}
