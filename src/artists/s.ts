import { Scheme } from "./../type.d";

const saville: Scheme = {
  meta: {
    title: "Latent",
    artist: "Jenny Saville",
    year: "2022",
    techniques: "Acrylic and pastel",
  },
  background: "#cb4c4f",
  colors: ["#602f1c", "#7f4c46", "#e49f9c"],
  stroke: "#4f739b",
  temp: "warm",
  theme: "bright",
};

const schmidt: Scheme = {
  meta: {
    title: "Offset Buch und Werbekunst, Jg. 7",
    artist: "Joost Schmidt",
    year: "1926",
    techniques: "Book, letterpress and offset printed",
  },
  background: "#E3D4C0",
  colors: ["#999998", "#C49424", "#D25146", "#403F3A"],
  stroke: "#59728C",
  temp: "warm",
  theme: "bright",
};

const sherman: Scheme = {
  meta: {
    title: "Untitled #92",
    artist: "Cindy Sherman",
    year: "1981",
    techniques: "Chromogenic print",
  },
  background: "#09090f",
  colors: ["#041933", "#073846", "#208cbe", "#deb49b"],
  stroke: "#dfe8ef",
  temp: "cold",
  theme: "dark",
};

export { saville, schmidt, sherman };
