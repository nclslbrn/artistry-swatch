import { type Scheme, Args, DefaultArgs, EntryScheme } from "./type";

import { albers, alys, andre, anuszkiewicz, arp } from "./artists/a";
import { bacon, bosch, bruegel } from "./artists/b";
import { cahn, corbusier } from "./artists/c";
import { dali, delaunay, doesburg, drei, durer } from "./artists/d";
import { ernst } from "./artists/e";
import { fleischmann, freud } from "./artists/f";
import { gentileschi, giacometti, goldin, greco } from "./artists/g";
import { hockney, hopper } from "./artists/h";
import { judd, johns } from "./artists/j";
import { kandinsky, kelly, khalil, kiefer, klee, klint, kupka } from "./artists/k";
import { lissitzky, lewitt } from "./artists/l";
import { magritte, malevich, martin, molnar, moss, mucha, mura } from "./artists/m";
import { nauman, newman } from "./artists/n";
import { okeefe, orozco } from "./artists/o";
import { picasso, pollard, pollock, popova } from "./artists/p";
import { rauschenberg, riley, rothko, rozanova, ruscha } from "./artists/r";
import { saville, schmidt, sherman } from "./artists/s";
import { taeuberArp, turner } from "./artists/t";
import { vasarely, vermeer } from "./artists/v";
import { yoshitoshi } from "./artists/y";
import { warhol, warb } from "./artists/w.ts";

const entries: EntryScheme = {
  albers,
  alys,
  andre,
  anuszkiewicz,
  arp,
  bacon,
  bosch,
  bruegel,
  cahn,
  corbusier,
  dali,
  delaunay,
  doesburg,
  drei,
  durer,
  ernst,
  fleischmann,
  freud,
  gentileschi,
  giacometti,
  goldin,
  greco,
  hockney,
  hopper,
  johns,
  judd,
  kandinsky,
  kelly,
  khalil,
  kiefer,
  klee,
  klint,
  kupka,
  lissitzky,
  lewitt,
  magritte,
  malevich,
  martin,
  molnar,
  moss,
  mucha,
  mura,
  nauman,
  newman,
  okeefe,
  orozco,
  picasso,
  pollard,
  pollock,
  popova,
  rauschenberg,
  riley,
  rothko,
  rozanova,
  ruscha,
  saville,
  schmidt,
  sherman,
  taeuberArp,
  turner,
  vasarely,
  vermeer,
  yoshitoshi,
  warhol,
  warb,
};

const palettesKey = Object.keys(entries);
const palettes: Scheme[] = palettesKey.map((id) => entries[id]);
/**
 * Return a random palette
 *
 * @param {object} args option
 * @param {float} [args.rand = Math.random()] a number between 0 and 1 to pick a scheme in query results
 * @param {string} [args.temp = 'any'] query sheme by temp (cold|warm|any)
 * @param {string} [args.theme = 'any'] query sheme by theme (bright|dark|any)
 * @param {string} [args.artist = 'any'] query scheme by artist name (firstname lastname)
 *
 * @returns false|Scheme false if no palette match current option else Scheme
 */
const getPalette = (args: Args): false | Scheme => {
  const defaultArgs: DefaultArgs = {
    rand: Math.random(),
    temp: "any",
    theme: "any",
    artist: "any",
  };
  // Overwrite default query with user value
  const query: DefaultArgs = { ...defaultArgs, ...args };

  // Test query param value
  if (!["any", "warm", "cold"].includes(query.temp)) {
    console.warn(
      "temp option not recognized, the script will use default value (any)",
    );
    query.temp = "any";
  }
  if (!["any", "bright", "dark"].includes(query.theme)) {
    console.warn(
      "theme option not recognized, the script will use default value (any)",
    );
    query.theme = "any";
  }
  if (query.rand < 0 || query.rand > 1) {
    console.warn(
      "rand is not in the required range (0-1), the script will cast it.",
    );
    query.rand = Math.max(0, Math.min(query.rand, 1));
  }

  // Filter palette according to query param
  let matchQuery = palettes;

  if (query.temp !== "any") {
    matchQuery = matchQuery.filter((p) => p.temp === query.temp);
  }
  if (query.theme !== "any") {
    matchQuery = matchQuery.filter((p) => p.theme === query.theme);
  }
  if (query.artist !== "any") {
    matchQuery = matchQuery.filter((p) => p.meta.artist === query.artist);
  }

  if (matchQuery.length === 0) {
    return false;
  } else if (matchQuery.length === 1) {
    return matchQuery[0];
  } else {
    return matchQuery[Math.floor(query.rand * matchQuery.length)];
  }
};

export {
  palettes,
  getPalette,
};
