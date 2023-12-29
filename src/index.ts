import { type Scheme, Args, DefaultArgs, EntryScheme } from './type';

import { albers, alys, andre, anuszkiewicz } from './artists/a';
import { bacon, bruegel } from './artists/b';
import { corbusier } from './artists/c';
import { dali, delaunay, doesburg, drei, durer } from './artists/d';
import { ernst } from './artists/e';
import { freud } from './artists/f';
import { gentileschi, giacometti, goldin, greco } from './artists/g';
import { hockney, hopper } from './artists/h';
import { judd } from './artists/j';
import { kandinsky, kelly, khalil, kiefer, klee, klint } from './artists/k';
import { lewitt } from './artists/l';
import { magritte, malevich, martin, mura } from './artists/m';
import { newman } from './artists/n';
import { okeefe } from './artists/o';
import { picasso, pollard, pollock } from './artists/p';
import { riley, rothko } from './artists/r';
import { saville, sherman } from './artists/s';
import { turner } from './artists/t';
import { vasarely, vermeer } from './artists/v';
import { yoshitoshi } from './artists/y';

const entries: EntryScheme = {
	albers,
	alys,
	andre,
	anuszkiewicz,
	bacon,
	bruegel,
	corbusier,
	dali,
	delaunay,
	doesburg,
	drei,
	durer,
	ernst,
	freud,
	gentileschi,
	giacometti,
	goldin,
	greco,
	hockney,
	hopper,
	judd,
	kandinsky,
	kelly,
	khalil,
	kiefer,
	klee,
	klint,
	lewitt,
	magritte,
	malevich,
	martin,
	mura,
	newman,
	okeefe,
	picasso,
	pollard,
	pollock,
	riley,
	rothko,
	saville,
	sherman,
	turner,
	vasarely,
	vermeer,
	yoshitoshi,
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
		temp: 'any',
		theme: 'any',
		artist: 'any',
	};
	// Overwrite default query with user value
	const query: DefaultArgs = { ...defaultArgs, ...args };

	// Test query param value
	if (!['any', 'warm', 'cold'].includes(query.temp)) {
		console.warn(
			'temp option not recognized, the script will use default value (any)'
		);
		query.temp = 'any';
	}
	if (!['any', 'bright', 'dark'].includes(query.theme)) {
		console.warn(
			'theme option not recognized, the script will use default value (any)'
		);
		query.theme = 'any';
	}
	if (query.rand < 0 || query.rand > 1) {
		console.warn(
			'rand is not in the required range (0-1), the script will cast it.'
		);
		query.rand = Math.max(0, Math.min(query.rand, 1));
	}

	// Filter palette according to query param
	let matchQuery = palettes;

	if (query.temp !== 'any') {
		matchQuery = matchQuery.filter((p) => p.temp === query.temp);
	}
	if (query.theme !== 'any') {
		matchQuery = matchQuery.filter((p) => p.theme === query.theme);
	}
	if (query.artist !== 'any') {
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
	albers,
	alys,
	anuszkiewicz,
	bacon,
	bruegel,
	corbusier,
	dali,
	delaunay,
	doesburg,
	drei,
	durer,
	freud,
	gentileschi,
	giacometti,
	goldin,
	greco,
	hockney,
	hopper,
	judd,
	kandinsky,
	kelly,
	khalil,
	kiefer,
	klee,
	klint,
	lewitt,
	magritte,
	malevich,
	martin,
	mura,
	newman,
	okeefe,
	picasso,
	pollard,
	pollock,
	riley,
	rothko,
	saville,
	sherman,
	turner,
	vasarely,
	vermeer,
	yoshitoshi,
	palettes,
	getPalette,
};
