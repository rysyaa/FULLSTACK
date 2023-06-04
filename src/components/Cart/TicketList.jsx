import React, { useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import { useFav } from "../../context/FavContextProvider";
// import { usePeople } from "../../context/PeopleContextProvider";

const ShopTicketsList = ({ item }) => {
  const { addProductToFav } = useFav();
  const { addProductToCart } = useCart();
  // const { productsTicket } = usePeople();

  // const [page, setPage] = useState(1);
  // const itemsPerPage = 3;
  // const count = Math.ceil(productsTicket.length / itemsPerPage);

  // const handleChange = (e, p) => {
  //   setPage(p);
  // };

  // function currentData() {
  //   const begin = (page - 1) * itemsPerPage;
  //   const end = begin + itemsPerPage;
  //   return productsTicket.slice(begin, end);
  // }

  return (
    <>
      <div>
        <h3>Airplane: --- {item.flight_name}</h3>
        <h3>Departure date: --- {item.departure_date}</h3>
        <h3>Pinching date: --- {item.arrival_date}</h3>
        <h3>Price: --- {item.price} $</h3>
        <h3>Flight time: --- {item.flight_time}</h3>
        <h3>number of tickets: --- {item.quantity}</h3>
        <h3>Category: --- {item.category}</h3>
        <h3>Where: --- {item.arrival}</h3>
        <button onClick={() => addProductToCart(item)}>Cart</button>
        <button onClick={() => addProductToFav(item)}>Fav</button>
      </div>
    </>
  );
};

export default ShopTicketsList;
