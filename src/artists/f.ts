import { Scheme } from "./../type.d";


const fleischmann: Scheme = {
  meta: {
    title: "Composition #72",
    artist: "Adolf Fleischmann",
    year: "1956",
    techniques: "Oil",
  },
  background: "#333236",
  colors: ["#0084B8", "#615452", "#DC032B", "#D38A6A"],
  stroke: "#D0D4D9",
  theme: "dark",
  temp: "neutral",
};

const freud: Scheme = {
  meta: {
    title: "Woman with a Daffodil summer",
    artist: "Lucian Freud",
    year: "1945",
    techniques: "Oil",
  },
  background: "#d8d5c6",
  colors: ["#5f868a", "#483f31", "#a6977c", "#c4c360", "#c5b79c"],
  stroke: "#133938",
  theme: "bright",
  temp: "warm",
};

export { fleischmann, freud };
