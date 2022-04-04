import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BAT",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921594/CricBazzar%20Ecommerce/Cricket-bat_lwscgk.jpg",
    description: "BATS",
  },
  {
    _id: uuid(),
    categoryName: "BALL",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921638/CricBazzar%20Ecommerce/cricket-ball_lco1zt.jpg",
    description: "BALLS",
  },
  {
    _id: uuid(),
    categoryName: "PROTECTION",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921655/CricBazzar%20Ecommerce/cricket-gloves_jswvvp.jpg",
    description: "GLOVES",
  },
  {
    _id: uuid(),
    categoryName: "PROTECTION",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921662/CricBazzar%20Ecommerce/cricket-pads_qjpl23.jpg",
    description: "PADS",
  },
  {
    _id: uuid(),
    categoryName: "CLOTHINGS",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921646/CricBazzar%20Ecommerce/cricket-clothing_mh8hsx.jpg",
    description: "CLOTHINGS",
  },
  {
    _id: uuid(),
    categoryName: "SHOES",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921629/CricBazzar%20Ecommerce/cricket_shoe_v3mnpp.jpg",
    description: "SHOES",
  },
  {
    _id: uuid(),
    categoryName: "PROTECTION",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921671/CricBazzar%20Ecommerce/cricket-protection-kit_o6obky.png",
    description: "PROTECTION GEAR",
  },
  {
    _id: uuid(),
    categoryName: "ACCESSORIES",
    img: "https://res.cloudinary.com/dgqwptcvp/image/upload/v1647921622/CricBazzar%20Ecommerce/cricket_bags_r7olq7.jpg",
    description: "ACCESSORIES",
  },
];
