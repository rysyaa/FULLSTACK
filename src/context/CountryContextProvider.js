import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./AuthContextProvider";
import { ACTIONS } from "../helpers/consts";

export const countryContext = createContext();
export const useCountry = () => useContext(countryContext);

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
      return { ...state, comments: action.payload };
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

const CountryContextProvider = ({ children }) => {
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
      const res = await axios(`${API}/country/list/`, getConfig());
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createComment(newProduct) {
    try {
      const res = await axios.post(`${API}/comments/`, newProduct, getConfig());
      navigate("/country");
    } catch (error) {
      console.log(error);
    }
  }

  async function createRating(newProduct) {
    try {
      const res = await axios.post(`${API}/rating/`, newProduct, getConfig());
      navigate("/country");
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

  async function deleteTicket(id) {
    try {
      await axios.patch(`${API}/tickets/${id}`, getConfig());
      getTickets();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneTicket(id) {
    const res = await axios(`${API}/tickets/${id}`, getConfig());
    dispatch({ type: "GET_ONE_TICKET", payload: res.data });
  }

  async function updateTicket(id, editedProduct) {
    try {
      await axios.patch(`${API}/tickets/${id}`, editedProduct, getConfig());
      navigate("/tickets");
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    getCountries,
    countries: state.countries,
    createComment,
    createRating,

    getTickets,
    tickets: state.tickets,
    pages: state.pages,
    deleteTicket,

    getOneTicket,
    oneTicket: state.oneTicket,
    updateTicket,
    productsTicket: state.productsTicket,
  };
  return (
    <countryContext.Provider value={values}>{children}</countryContext.Provider>
  );
};

export default CountryContextProvider;
