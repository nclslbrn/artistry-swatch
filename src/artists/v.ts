import { Scheme } from "./../type.d";

const vasarely: Scheme = {
  meta: {
    title: "CELL",
    artist: "Victor Vasarely",
    year: "1970",
    techniques: "Acrylic",
  },
  background: "#07042c",
  colors: ["#d12938", "#387589", "#5272ef"],
  stroke: "#5ba9c7",
  temp: "cold",
  theme: "dark",
};

const vermeer: Scheme = {
  meta: {
    title: "Girl With A Pearl Earring",
    artist: "Johannes Vermeer",
    year: "1665",
    techniques: "Oil",
  },
  background: "#000115",
  colors: ["#ccd7e9", "#361e12", "#dcb371"],
  stroke: "#f7e5d9",
  temp: "warm",
  theme: "dark",
};

export { vasarely, vermeer };
