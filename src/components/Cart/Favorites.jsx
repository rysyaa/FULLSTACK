import React, { useEffect } from "react";
import { useFav } from "../../context/FavContextProvider";
import "./Favorites.css";

const Favorites = () => {
  const { getCart, cart, deleteCartProduct } = useFav();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div
      className="fav_con"
      style={{ minHeight: "100vh", backgroundColor: "gray" }}
    >
      <div className="fav_container">
        {cart?.products.map((row) => (
          <div
            className="fav__photo"
            key={row.item.id}
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className="fav__info">
              <h6 className="fav__name">Airplane: {row.item.flight_name}</h6>
              <h6 className="fav__title">
                Departure date: {row.item.departure_date}
              </h6>
              <h6 className="fav__date">
                Pinching date: {row.item.arrival_date}
              </h6>
              <h6 className="fav__date">Price: {row.item.price}</h6>
              <h6 className="fav__date">Flight time: {row.item.flight_time}</h6>
              <h6 className="fav__date">
                Number of tickets: {row.item.quantity}
              </h6>
              <h6 className="fav__date">Category: {row.item.category}</h6>
              <h6 className="fav__date">Where: {row.item.arrival}</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1em",
                paddingRight: "2em",
              }}
            ></div>
            <button
              className="fav_btn"
              onClick={() => deleteCartProduct(row.item.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
