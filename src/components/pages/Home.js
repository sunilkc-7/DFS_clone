import React from "react";
import { Context } from "../Context/Provider";
import "./Home.css";

const Home = () => {
  const {
    showItem,
    DrinkItems,
    BreadItems,
    BakeryItems,
    drinkquantity,
    drinkprice,
    breadquantity,
    breadprice,
    bakeryprice,
    bakeryquantity,
  } = React.useContext(Context);
  const { showItems, setShowItems } = showItem;
  const { drinksQuantity, setDrinksQuantity } = drinkquantity;
  const { drinksPrice, setDrinksPrice } = drinkprice;
  const { breadQuantity, setBreadQuantity } = breadquantity;
  const { breadPrice, setBreadPrice } = breadprice;
  const { bakeryPrice, setBakeryPrice } = bakeryprice;
  const { bakeryQuantity, setBakeryQuantity } = bakeryquantity;

  const incrementHandler = (
    e,
    i,
    itemQuantity,
    setItemQuantity,
    itemPrice,
    setItemPrice
  ) => {
    const newPrice = { ...itemPrice };
    setItemQuantity({
      ...itemQuantity,
      [i.input]: parseInt(e.target.value) + 1,
    });
    newPrice[i.input] = ((parseInt(e.target.value) + 1) * i.rate).toFixed(2);
    setItemPrice(newPrice);
  };
  const decrementHandler = (
    e,
    i,
    itemQuantity,
    setItemQuantity,
    itemPrice,
    setItemPrice
  ) => {
    if (e.target.value > 0) {
      setItemQuantity({
        ...itemQuantity,
        [i.input]: parseInt(e.target.value) - 1,
      });
      setItemPrice({
        ...itemPrice,
        [i.input]: (itemPrice[i.input] - i.rate).toFixed(2),
      });
    }
  };

  const ItemHead = () => {
    return (
      <div className="headItem">
        <span className="itemName">Item</span>
        <div className="img">IMG</div>
        <span className="availableTime">Available Time</span>
        <span className="qty">Rate</span>
        <span className="initquant">Init Qty</span>
        <span className="availableQty">Avail Qty</span>
        <span className="action">Quantity</span>
        <span className="price">Price</span>
      </div>
    );
  };

  const ItemsDetails = (props) => {
    const {
      i,
      name,
      image,
      time,
      rate,
      initialQuantity,
      availableQuantity,
      input,
      itemQuantity,
      setItemQuantity,
      itemPrice,
      setItemPrice,
    } = props;

    return (
      <div className="items">
        <span className="itemName">{name}</span>
        <img src={image} alt="img" className="img" />
        <span className="availableTime">{time}</span>
        <span className="qty">{rate}</span>
        <span className="initquant">{initialQuantity}</span>
        <span className="availableQty">{availableQuantity}</span>
        <div className="action">
          <button
            className="btn"
            name={name}
            value={itemQuantity[input]}
            onClick={(e) =>
              decrementHandler(
                e,
                i,
                itemQuantity,
                setItemQuantity,
                itemPrice,
                setItemPrice
              )
            }
          >
            -
          </button>
          <span className="qtyText">{itemQuantity[input]}</span>
          <button
            className="btn"
            name={name}
            onClick={(e) =>
              incrementHandler(
                e,
                i,
                itemQuantity,
                setItemQuantity,
                itemPrice,
                setItemPrice
              )
            }
            value={itemQuantity[input]}
          >
            +
          </button>
        </div>
        <span className="price">{itemPrice[input]}</span>
      </div>
    );
  };

  return (
    <>
      <ItemHead />
      <div className="wrapper">
        <div className="itemHead">
          <i
            className={
              showItems.showDrinkItem
                ? "fa-solid fa-circle-minus"
                : "fa-solid fa-circle-plus"
            }
            style={{ color: "green", padding: "0px 5px" }}
            onClick={() =>
              setShowItems((prevstate) => ({
                ...prevstate,
                showDrinkItem: !prevstate.showDrinkItem,
              }))
            }
          ></i>
          <span className="" style={{ color: "black" }}>
            Drinks Item
          </span>
        </div>

        {showItems.showDrinkItem &&
          DrinkItems.map((i) => {
            return (
              <ItemsDetails
                key={i.id}
                i={i}
                id={i.id}
                name={i.name}
                image={i.image}
                time={i.time}
                rate={i.rate}
                initialQuantity={i.initialQuantity}
                availableQuantity={i.availableQuantity}
                input={i.input}
                itemQuantity={drinksQuantity}
                setItemQuantity={setDrinksQuantity}
                itemPrice={drinksPrice}
                setItemPrice={setDrinksPrice}
              />
            );
          })}
      </div>
      <div className="wrapper">
        <div className="itemHead">
          <i
            className={
              showItems.showBreadItem
                ? "fa-solid fa-circle-minus"
                : "fa-solid fa-circle-plus"
            }
            style={{ color: "green", padding: "0px 5px" }}
            onClick={() =>
              setShowItems((prevstate) => ({
                ...prevstate,
                showBreadItem: !prevstate.showBreadItem,
              }))
            }
          ></i>
          <span className="" style={{ color: "black" }}>
            Breads Item
          </span>
        </div>
        {showItems.showBreadItem &&
          BreadItems.map((i) => {
            return (
              <ItemsDetails
                key={i.id}
                i={i}
                id={i.id}
                name={i.name}
                image={i.image}
                time={i.time}
                rate={i.rate}
                initialQuantity={i.initialQuantity}
                availableQuantity={i.availableQuantity}
                input={i.input}
                itemQuantity={breadQuantity}
                setItemQuantity={setBreadQuantity}
                itemPrice={breadPrice}
                setItemPrice={setBreadPrice}
              />
            );
          })}
      </div>
      <div className="wrapper">
        <div className="itemHead">
          <i
            className={
              showItems.showBakeryItem
                ? "fa-solid fa-circle-minus"
                : "fa-solid fa-circle-plus"
            }
            style={{ color: "green", padding: "0px 5px" }}
            onClick={() =>
              setShowItems((prevstate) => ({
                ...prevstate,
                showBakeryItem: !prevstate.showBakeryItem,
              }))
            }
          ></i>
          <span className="" style={{ color: "black" }}>
            Bakery Item
          </span>
        </div>

        {showItems.showBakeryItem &&
          BakeryItems.map((i) => {
            return (
              <ItemsDetails
                key={i.id}
                i={i}
                id={i.id}
                name={i.name}
                image={i.image}
                time={i.time}
                rate={i.rate}
                initialQuantity={i.initialQuantity}
                availableQuantity={i.availableQuantity}
                input={i.input}
                itemQuantity={bakeryQuantity}
                setItemQuantity={setBakeryQuantity}
                itemPrice={bakeryPrice}
                setItemPrice={setBakeryPrice}
              />
            );
          })}
      </div>
    </>
  );
};
export default Home;
