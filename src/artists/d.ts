import { type Scheme } from "../index"

export default [{
  background: "#ece3e4",
  colors: ["#93b8e5", "#aa8153", "#eec667", "#b87143", "#e27c4b"],
  stroke: "#503e3c",
  theme: "bright",
  temp: "warm",
  meta: {
    artist: "Salvador Dalí",
    title: "Persistence Of Memory",
    year: "1931",
    techniques: "Oil"
  }
}, {
  background: "#eae5e0",
  colors: ["#a40e00", "#758a27", "#11347b", "#286198"],
  stroke: "#11030a",
  temp: 'cold',
  theme: 'bright',
  meta: {
    artist: "Sonia Delaunay",
    title: "Contrepoint, circa",
    year: "1970",
    techniques: "Lithography"
  }
},{
  background: "#1C2424",
  colors: ["#3D55A8", "#3FA622", "#F6F7F1", "#463D33"],
  stroke: "#6A6157",
  temp : "cold",
  theme: "dark",
  meta: {
    title: "Stained glass composition, Woman",
    artist: "Theo van Doesburg",
    year: "1917", 
    techniques: "Glass",
  }   
},   {
  background: "#657359",
  colors: ["#9AA582", "#8B775F", "#D7C9BE"],
  stroke: "#D7C9BE",
  temp: "cold",
  theme: "dark",
  meta: {
    title: "The Large Piece of Turf",
    artist: "Albrecht Dürer",
    year: "1503",
    techniques: "Watercolor"
  }
},] as Scheme[]