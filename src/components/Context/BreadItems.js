import chickenClubSandwich from "../Assets/chickenClubSandwich.jpeg";
import vegClubSandwich from "../Assets/vegClubSandwich.jfif";

export const BreadItems = [
  {
    id: 1,
    name: "Chicken Club Sandwich",
    image: chickenClubSandwich,
    time: "11:00am - 4:00pm",
    rate: 146.9,
    initialQuantity: 15,
    availableQuantity: 1,
    price: "25",
    input: "chickenClubSandwich",
  },
  {
    id: 2,
    name: "Veg Club Sandwich",
    image: vegClubSandwich,
    time: "11:00am - 4:00pm",
    rate: 90.4,
    initialQuantity: 8,
    availableQuantity: 3,
    price: "45",
    input: "vegClubSandwich",
  },
];
export const BreadQuantity = {
  chickenClubSandwich: 0,
  vegClubSandwich: 0,
};
export const BreadPrice = {
  chickenClubSandwich: 0,
  vegClubSandwich: 0,
};
