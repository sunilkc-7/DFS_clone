import milkTea from "../Assets/milkTea.jpg";
import milkCoffe from "../Assets/milkCoffee.jpg";
import blackCoffe from "../Assets/blackCoffee.jpg";
import blackTea from "../Assets/blackTea.jpg";
export const DrinkItems = [
  {
    id: 1,
    name: "Black Coffee",
    image: blackCoffe,
    time: "9:00am - 4:00pm",
    rate: 5,
    initialQuantity: "20",
    availableQuantity: "2",
    price: "25",
    input: "blackCoffe",
  },
  {
    id: 2,
    name: "Milk coffee",
    image: milkCoffe,
    time: "9:00am - 4:00pm",
    rate: 15,
    initialQuantity: "20",
    availableQuantity: "2",
    price: "45",
    input: "milkCoffe",
  },
  {
    id: 3,
    name: "Milk Tea",
    image: milkTea,
    time: "9:00am - 4:00pm",
    rate: 20,
    initialQuantity: "20",
    availableQuantity: "2",
    price: "30",
    input: "milkTea",
  },
  {
    id: 4,
    name: "Black Tea",
    image: blackTea,
    time: "9:00am - 4:00pm",
    rate: 25,
    initialQuantity: "20",
    availableQuantity: "2",
    price: "20",
    input: "blackTea",
  },
];

export const DrinkQuantity = {
  blackCoffe: 0,
  milkCoffe: 0,
  blackTea: 0,
  milkTea: 0,
};
export const DrinkPrice = {
  blackCoffe: 0,
  milkCoffe: 0,
  blackTea: 0,
  milkTea: 0,
};
