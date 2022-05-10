import React, { createContext, useState } from "react";
import { BreadItems, BreadQuantity, BreadPrice } from "./BreadItems";
import { DrinkItems, DrinkQuantity, DrinkPrice } from "./DrinkItems";
import { BakeryItems, BakeryQuantity, BakeryPrice } from "./BakeryItems";
export const Context = createContext();

const Provider = (props) => {
  const [showItems, setShowItems] = useState({
    showDrinkItem: true,
    showBreadItem: true,
    showBakeryItem: true,
  });
  const [drinksQuantity, setDrinksQuantity] = useState(DrinkQuantity);
  const [drinksPrice, setDrinksPrice] = useState(DrinkPrice);
  const [breadQuantity, setBreadQuantity] = useState(BreadQuantity);
  const [breadPrice, setBreadPrice] = useState(BreadPrice);
  const [bakeryQuantity, setBakeryQuantity] = useState(BakeryQuantity);
  const [bakeryPrice, setBakeryPrice] = useState(BakeryPrice);

  return (
    <Context.Provider
      value={{
        showItem: { showItems, setShowItems },
        DrinkItems,
        drinkquantity: { drinksQuantity, setDrinksQuantity },
        drinkprice: { drinksPrice, setDrinksPrice },
        BreadItems,
        breadquantity: { breadQuantity, setBreadQuantity },
        breadprice: { breadPrice, setBreadPrice },
        BakeryItems,
        bakeryquantity: { bakeryQuantity, setBakeryQuantity },
        bakeryprice: { bakeryPrice, setBakeryPrice },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
