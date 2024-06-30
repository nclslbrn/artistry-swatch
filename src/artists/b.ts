import { Scheme } from "./../type.d";

const bacon: Scheme = {
  meta: {
    title:
      "Study for Portrait, Number IV (After the Life Mask of William Blake)",
    artist: "Francis Bacon",
    year: "1956",
    techniques: "Oil",
  },
  background: "#282e26",
  colors: ["#495955", "#625d51", "#c3655c"],
  stroke: "#3d4649",
  temp: "warm",
  theme: "dark",
};

const bosch: Scheme = {
  meta: {
    title: "Le Jugement dernier ",
    artist: "Jérôme Bosch",
    year: "1486",
    techniques: "Oil",
  },
  background: "#D8D2B5",
  colors: ["#D79967", "#B41E30", "#69705A"],
  stroke: "#474C4B",
  temp: "warm",
  theme: "bright",
};

const bruegel: Scheme = {
  meta: {
    title: "Landscape with the Fall of Icarus",
    artist: "Pieter Bruegel the Elder",
    year: "1500",
    techniques: "Oil",
  },
  background: "#7F9086",
  colors: ["#A29A68", "#676A4F", "#54573f", "#A63C24"],
  stroke: "#BFBED5",
  temp: "warm",
  theme: "bright",
};

export { bacon, bosch, bruegel };
