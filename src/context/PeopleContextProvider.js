import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "./AuthContextProvider";
import { ACTIONS } from "../helpers/consts";

export const peopleContext = createContext();
export const usePeople = () => useContext(peopleContext);

const INIT_STATE = {
  tickets: [],
  pages: 1,
  countries: [],
  oneTicket: null,
  productsTicket: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    case "GET_ONE_TICKET":
      return { ...state, oneTicket: action.payload };
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsTicket: action.payload };
    default:
      return state;
  }
};

const PeopleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

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
      const res = await axios(`${API}/tiket/list/`, getConfig());
      console.log("res", res);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getTickets() {
    try {
      const res = await axios(
        `${API}/tiket/${window.location.search}`,
        getConfig()
      );
      dispatch({ type: "GET_TICKETS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    getCountries,
    countries: state.countries,

    getTickets,
    tickets: state.tickets,
    pages: state.pages,
    productsTicket: state.productsTicket,
  };
  return (
    <peopleContext.Provider value={values}>{children}</peopleContext.Provider>
  );
};

export default PeopleContextProvider;
