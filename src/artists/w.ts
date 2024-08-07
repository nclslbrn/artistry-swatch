import { Scheme } from "./../type.d";

const warhol: Scheme = {
  meta: {
    title: "Marilyn Monroe",
    artist: "Andy Warhol",
    year: "1967",
    techniques: "Portfolio of ten screenprints",
  },
  background: "#fc5c9c",
  colors: [
    "#FCB2AF",
    "#EFED82"
  ],
  stroke: "#34302c",
  temp: "neutral",
  theme: "bright",
};

const warb: Scheme = {
  meta: {
    title: "L'Heure est venue",
    artist: "Nicolaas Warb",
    year: "1949",
    techniques: "gouache",
  },
  background: "#e4c29d",
  colors: ["#eee9e5", "#e74031", "#f1a411", "#047ec6", "#007f76"],
  stroke: "#c0b5bd",
  temp: "neutral",
  theme: "bright",
};

export { warhol, warb };
