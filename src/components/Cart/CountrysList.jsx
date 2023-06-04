import React, { useState } from "react";

const CountryList = ({ item }) => {
  return (
    <>
      <div>
        <h3>Title: --- {item.title}</h3>
        <h3>Rating: --- {item.rating}</h3>
        <div style={{ border: "2px solid black" }}>
          <span>Comments: ---</span>
          <hr />
          {item.comments.map((com) => (
            <div style={{display: "flex", gap: "1em"}}>
              <h3>{com.user.email}: </h3>
              <h3> {com.body ? com.body : "Not comments"}</h3>
            </div>
          ))}
        </div>
        <button>Cart</button>
      </div>
    </>
  );
};

export default CountryList;
