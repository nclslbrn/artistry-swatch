import { Scheme } from "./../type.d";

const judd: Scheme = {
  meta: {
    title: "Untitled",
    artist: "Donald Judd",
    year: "1991",
    techniques: "Enameled aluminum",
  },
  background: "#303032",
  colors: ["#e6a414", "#feb304", "#f8ec40", "#f2f7fb", "#41a7b3", "#1d76a4"],
  stroke: "#bc3b1e",
  temp: "warm",
  theme: "dark",
};

const johns: Scheme = {
  meta: { title: "Regrets", artist: "Jasper Johns", year: "2014", techniques: "Aquatint with chine collé" },
  background: "#333534",
  colors: [
    "#dcd8d0",
    "#797c7a",
    "#89867f",
  ],
  stroke: "#949494",
  temp: "neutral",
  theme: "dark",
};

export { judd, johns };
