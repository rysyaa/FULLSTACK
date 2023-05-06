import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, JSON_API_PEOPLE } from "../helpers/consts";
import { useNavigate } from "react-router-dom";

export const peopleContext = createContext();

const INIT_STATE = {
  people: [],
  peopleDetails: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PEOPLE:
      return { ...state, people: action.payload };
      case ACTIONS.GET_PEOPLE_DETAILS:
        return { ...state, peopleDetails: action.payload };
    default:
      return state;
  }
};

export const usePeople = () => {
  return useContext(peopleContext);
};

const PeopleContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getPeople = async () => {
    const { data } = await axios(JSON_API_PEOPLE);

    dispatch({ type: ACTIONS.GET_PEOPLE, payload: data });
  };

  //

  const addPeople = async (newPeople) => {
    await axios.post(JSON_API_PEOPLE, newPeople);
    getPeople();
  };
  const deletePeople = async (id) => {
    await axios.delete(`${JSON_API_PEOPLE}/${id}`);
    getPeople();
  };
  const getPeopleDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PEOPLE}/${id}`);
    dispatch({
      type: ACTIONS.GET_PEOPLE_DETAILS,
      payload: data,
    });
  };

  const saveEditPeople = async (newPeople) => {
    await axios.patch(`${JSON_API_PEOPLE}/${newPeople.id}`, newPeople);
    getPeople();
    navigate("/ticket");
  };

  const [ticket, setTicket] = useState(0)

  const countTicket = async() => {
    let {data} = await axios(JSON_API_PEOPLE)
    let countsTicket = data.length
    setTicket(countsTicket)
}
countTicket()

  const values = {
    addPeople,
    getPeople,
    people: state.people,
    deletePeople,
    getPeopleDetails,
    peopleDetails: state.peopleDetails,
    saveEditPeople,
    countTicket,
    ticket
  };
  return (
    <peopleContext.Provider value={values}>{children}</peopleContext.Provider>
  );
};

export default PeopleContextProvider;
