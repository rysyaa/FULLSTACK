import React, { useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    navigate("/ticket");
    getCart();
    alert("Your cart has been cleared");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "gray" }}>
      <div className="cart_container">
        {cart?.products.map((row) => (
          <div
            className="cart__photo"
            key={row.item.id}
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className="cart__info">
              <h6 className="cart__name">Airplane: {row.item.flight_name}</h6>
              <h6 className="cart__title">
                Departure date: {row.item.departure_date}
              </h6>
              <h6 className="cart__date">
                Pinching date: {row.item.arrival_date}
              </h6>
              <h6 className="cart__date">Price: {row.item.price}</h6>
              <h6 className="cart__date">
                Flight time: {row.item.flight_time}
              </h6>
              <h6 className="cart__date">
                Number of tickets: {row.item.quantity}
              </h6>
              <h6 className="cart__date">Category: {row.item.category}</h6>
              <h6 className="cart__date">Where: {row.item.arrival}</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1em",
                paddingRight: "2em",
              }}
            >
              <h5 className="cart__title">Quantity:</h5>
              <input
                type="text"
                onChange={(e) =>
                  changeProductCount(e.target.value, row.item.id)
                }
                value={row.count}
                min={1}
                style={{
                  outline: 0,
                  border: "none",
                  height: "5vh",
                  width: "8vw",
                  fontSize: "2em",
                  background: "none",
                }}
              />
              <h4 align="right">Итого: {row.subPrice} ₽</h4>
              <button
                onClick={() => deleteCartProduct(row.item.id)}
                style={{
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.7em 1em",
                  fontWeight: "600",
                  backgroundColor: "brown",
                  cursor: "pointer",
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className="cart__buy">
          <h3>Total: {cart?.totalPrice} $</h3>
          <button
            onClick={cartCleaner}
            style={{
              border: "none",
              borderRadius: "4px",
              padding: "0.7em 1em",
              fontWeight: "600",
              backgroundColor: "brown",
              cursor: "pointer",
            }}
          >
            BUY
          </button>
        </div>
    </div>
  );
};

export default Cart;
