import React, { useContext } from "react";
import "./Categories.css";
import { Context } from "../Context/Provider";

function Categories() {
  const { showItem } = useContext(Context);
  const { showItems, setShowItems } = showItem;
  const searchHander = () => {};

  return (
    <div className="bodyWrapper">
      <div className="search">
        <input type="text" className="searchInput" />
        <button className="searchBtn" onClick={searchHander}>
          Search
        </button>
      </div>
      <div className="inputFields">
        <div className="radioInputs">
          <input
            type="radio"
            name="select"
            id="expand"
            className="radioBtn"
            value="Expand All"
            defaultChecked
            onClick={() =>
              setShowItems({
                showDrinkItem: true,
                showBreadItem: true,
                showBakeryItem: true,
              })
            }
          />
          <label htmlFor="expand" className="radioLabel">
            Expand All
          </label>
          <input
            type="radio"
            name="select"
            className="radioBtn"
            id="collapse"
            value="Collapse All"
            onClick={() =>
              setShowItems({
                showDrinkItem: false,
                showBreadItem: false,
                showBakeryItem: false,
              })
            }
          />
          <label htmlFor="collapse" className="radioLabel">
            Collapse All
          </label>
        </div>
        <div className="catButtons">
          <button className="catBtn">All Time</button>
          <button className="catBtn">Lunch</button>
          <button className="catBtn">Brekfast</button>
          <button className="catBtn">Snacks</button>
          <button className="catBtnLast">Dinner</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
