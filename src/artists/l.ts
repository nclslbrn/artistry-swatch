import { Scheme } from "./../type.d";

const lissitzky: Scheme = {
  meta: {
    title: "Proun 19D",
    artist: "El Lissitzky",
    year: "1920 or 1921",
    techniques:
      "Gesso, oil, varnish, crayon, colored papers, sandpaper, graph paper, cardboard, metallic paint, and metal foil on plywood",
  },
  background: "#D1D3C7",
  colors: ["#B1B2AC", "#637B80", "#D2A144", "#B47B44"],
  stroke: "#2C2E34",
  temp: "warm",
  theme: "bright",
};

const lewitt: Scheme = {
  meta: {
    title: "Squiggles",
    artist: "Sol Lewitt",
    year: "1997",
    techniques: "Gouache",
  },
  background: "#EAF2F0",
  colors: ["#F9C40A", "#0A71B6", "#EB5432"],
  stroke: "#190506",
  temp: "warm",
  theme: "bright",
};

export { lewitt, lissitzky };
