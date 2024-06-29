import { Scheme } from "./../type.d";

const rauschenberg: Scheme = {
  meta: {
    title: "Collection",
    artist: "Robert Rauschenberg",
    year: "1954",
    techniques: "Oil, paper, fabric, wood, and metal",
  },
  background: "#274062",
  colors: [
    "#a5694e",
    "#684f44",
    "#dbb771",
    "#c3a08e",
    "#dcc8b7",
    "#a32d25",
    "#c19970",
  ],
  stroke: "#de9e50",
  temp: "warm",
  theme: "bright",
};

const riley: Scheme = {
  meta: {
    title: "Movement in Squares",
    artist: "Bridget Riley",
    year: "1961",
    techniques: "Synthetic emulsion on board",
  },
  background: "#1b4b5f",
  colors: [
    "#c84054",
    "#c3982b",
    "#4260b8",
    "#2e8162",
    "#185bc3",
    "#b877b1",
    "#adc370",
  ],
  stroke: "#e3ddc2",
  temp: "cold",
  theme: "dark",
};

const rothko: Scheme = {
  meta: {
    artist: "Mark Rothko",
    title: "No. 10",
    year: "1950",
    techniques: "Oil",
  },
  background: "#4b5779",
  colors: ["#5c6485", "#8c8b88", "#c1995b"],
  stroke: "#71625b",
  temp: "cold",
  theme: "bright",
};

const rozanova: Scheme = {
  meta: {
    title: "Non-Objective Composition",
    artist: "Olga Rozanova",
    year: "1916",
    techniques: "oil",
  },
  background: "#f1ead5",
  colors: ["#d12419", "#e2a935", "#151963", "#aaa23a"],
  stroke: "#19161f",
  temp: "neutral",
  theme: "bright",
};

export { rauschenberg, riley, rothko, rozanova };
