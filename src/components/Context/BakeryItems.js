import chocolateDanish from "../Assets/chocolateDanish.jpg";
import chocolateDoughnut from "../Assets/chocolateDoughnut.jpg";

export const BakeryItems = [
  {
    id: 1,
    name: "Chocolate Danish",
    image: chocolateDanish,
    time: "11:00am - 4:00pm",
    rate: 146.9,
    initialQuantity: 15,
    availableQuantity: 1,
    price: "25",
    input: "chocolateDanish",
  },
  {
    id: 2,
    name: "Chocolate Doughnut",
    image: chocolateDoughnut,
    time: "11:00am - 4:00pm",
    rate: 146.9,
    initialQuantity: 15,
    availableQuantity: 1,
    price: "25",
    input: "chocolateDoughnut",
  },
];
export const BakeryQuantity = {
  chocolateDanish: 0,
  chocolateDoughnut: 0,
};
export const BakeryPrice = {
  chocolateDanish: 0,
  chocolateDoughnut: 0,
};
