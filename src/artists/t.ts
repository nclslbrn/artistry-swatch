import { Scheme } from "./../type.d";

const taeuberArp: Scheme = {
  meta: {
    title: "Plate from 10 Origin",
    artist: "Sophie Taeuber-Arp",
    year: "1942",
    techniques: "Linoleum cut",
  },
  background: "#F2DAC4",
  colors: ["#4BA6A6", "#F2441D"],
  stroke: "#403836",
  temp: "warm",
  theme: "bright",
};

const turner: Scheme = {
  meta: {
    title: "The Fifth Plague of Egypt",
    artist: "Joseph Mallord William Turner",
    year: "1800",
    techniques: "Oil",
  },
  background: "#1d2729",
  colors: ["#d9cac0", "#131314", "#bb9c68", "#6f422a", "#636c67"],
  stroke: "#D7CBB8",
  temp: "cold",
  theme: "dark",
};

export { taeuberArp, turner };
