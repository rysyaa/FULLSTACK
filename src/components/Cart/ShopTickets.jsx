import React, { useEffect, useState } from "react";
import { usePeople } from "../../context/PeopleContextProvider";
import "./ShopTickets.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ShopTicketsList from "./ShopTicketsList";
import {
  Box,
  FormControlLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const ShopTickets = () => {
  const { getCountries, countries, pages, productsTicket } = usePeople();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  // *FIlter
  const location = useLocation();
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };
  // *FIlter

  function getPagesCount() {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);

  useEffect(() => {
    getCountries();
  }, []);

  // if (currentPage < 1) setCurrentPage(1);
  // if (currentPage > pages) setCurrentPage(pages);

  const DesignFilter = (
    <div
      className="ShopTickets__filterDesignContainer"
      style={{ paddingTop: "6em", margin: "0 auto" }}
    >
      <TextField
        type="text"
        sx={{ width: "300px", height: "70px" }}
        placeholder="Search... "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="ShopTickets__filterDesign">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          sx={{ display: "flex", flexDirection: "row" }}
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("Category", e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="Econom" control={<Radio />} label="Econom" />
          <FormControlLabel
            value="Comfort"
            control={<Radio />}
            label="Comfort"
          />
          <FormControlLabel
            value="Business"
            control={<Radio />}
            label="Business"
          />
        </RadioGroup>
      </div>
    </div>
  );

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const count = Math.ceil(productsTicket.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return productsTicket.slice(begin, end);
  }

  useEffect(() => {
    getCountries();
    setPage(1);
  }, [searchParams]);

  return (
    <>
      <div style={{ backgroundColor: "gray", minHeight: "100vh" }}>
        {DesignFilter}
        <Grid item md={9}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "4rem",
              justifyContent: "space-evenly",
            }}
          >
            {currentData()?.map((item) => (
              <div className="Shop__card" key={item.id}>
                <ShopTicketsList item={item} />
              </div>
            ))}
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
              style={{ backgroundColor: "#AAA", width: "100%" }}
            />
          </Box>
        </Grid>
      </div>
    </>
  );
};

export default ShopTickets;
