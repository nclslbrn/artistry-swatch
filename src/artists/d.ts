import { Scheme } from "./../type.d";

const dali: Scheme = {
  meta: {
    artist: "Salvador Dalí",
    title: "Persistence Of Memory",
    year: "1931",
    techniques: "Oil",
  },
  background: "#ece3e4",
  colors: ["#93b8e5", "#aa8153", "#eec667", "#b87143", "#e27c4b"],
  stroke: "#503e3c",
  theme: "bright",
  temp: "warm",
};

const delaunay: Scheme = {
  meta: {
    artist: "Sonia Delaunay",
    title: "Contrepoint, circa",
    year: "1970",
    techniques: "Lithography",
  },
  background: "#eae5e0",
  colors: ["#a40e00", "#758a27", "#11347b", "#286198"],
  stroke: "#11030a",
  temp: "cold",
  theme: "bright",
};

const doesburg: Scheme = {
  meta: {
    title: "Stained glass composition, Woman",
    artist: "Theo van Doesburg",
    year: "1917",
    techniques: "Glass",
  },
  background: "#1C2424",
  colors: ["#3D55A8", "#3FA622", "#F6F7F1", "#463D33"],
  stroke: "#6A6157",
  temp: "cold",
  theme: "dark",
};

const drei: Scheme = {
  meta: {
    title: "Transgressed crystals",
    artist: "Lia Drei",
    year: "1974",
    techniques: "acrylic",
  },
  background: "#f42a12",
  stroke: "#35363a",
  colors: ["#cdcccc", "#398fc3", "#fa7e00", "#1e988e", "#cec401", "#304eba"],
  temp: "cold",
  theme: "bright",
};

const durer: Scheme = {
  meta: {
    title: "The Large Piece of Turf",
    artist: "Albrecht Dürer",
    year: "1503",
    techniques: "Watercolor",
  },
  background: "#657359",
  colors: ["#9AA582", "#8B775F", "#D7C9BE"],
  stroke: "#D7C9BE",
  temp: "cold",
  theme: "dark",
};

export { dali, delaunay, doesburg, drei, durer };
