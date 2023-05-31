import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./AuthContextProvider";

export const peopleContext = createContext();
export const usePeople = () => useContext(peopleContext);

const INIT_STATE = {
  tickets: [],
  pages: 1,
  countries: [],
  oneTicket: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    case "GET_ONE_TICKET":
      return { ...state, oneTicket: action.payload };
    default:
      return state;
  }
};

const PeopleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  }

  async function getCountries() {
    try {
      const res = await axios(`${API}/ticket/list`, getConfig());
      console.log(res);
      dispatch({
        type: "GET_COUNTRIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createTicket(newProduct) {
    try {
      const res = await axios.post(`${API}/tickets/`, newProduct, getConfig());
      navigate("/ticket");
    } catch (error) {
      console.log(error);
    }
  }

  async function getTickets() {
    try {
      const res = await axios(
        `${API}/tickets/${window.location.search}`,
        getConfig()
      );
      dispatch({type: "GET_TICKETS", payload: res.data})
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTicket(id) {
    try {
      await axios.patch(`${API}/tickets/${id}`, getConfig())
      getTickets()
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneTicket(id){
    const res = await axios(`${API}/tickets/${id}`, getConfig())
    dispatch({type: "GET_ONE_TICKET", payload: res.data})
  }


  async function updateTicket(id, editedProduct){
    try {
      await axios.patch(`${API}/tickets/${id}`, editedProduct, getConfig());
      navigate('/tickets')
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    getCountries,
    countries: state.countries,
    createTicket,

    getTickets,
    tickets: state.tickets,
    pages: state.pages,
    deleteTicket,

    getOneTicket,
    oneTicket: state.oneTicket,
    updateTicket,
  };
  return (
    <peopleContext.Provider value={values}>{children}</peopleContext.Provider>
  );
};

export default PeopleContextProvider;
