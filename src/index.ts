export interface Scheme {
	background: string;
	colors: string[];
	stroke: string;
	temp: 'cold' | 'warm' | 'neutral';
	theme: 'bright' | 'dark';
	meta: {
		title: string;
		artist: string;
		year: string;
		techniques: string;
	};
}

export interface Args {
	rand?: number;
	temp?: 'any' | 'cold' | 'warm';
	theme?: 'any' | 'bright' | 'dark';
	artist?: string;
}

export interface DefaultArgs extends Args {
	rand: number;
	temp: 'any' | 'cold' | 'warm';
	theme: 'any' | 'bright' | 'dark';
	artist: string;
}

import b from './artists/b';
import c from './artists/c';
import d from './artists/d';
import f from './artists/f';
import g from './artists/g';
import h from './artists/h';
import j from './artists/j';
import k from './artists/k';
import l from './artists/l';
import m from './artists/m';
import n from './artists/n';
import o from './artists/o';
import p from './artists/p';
import r from './artists/r';
import s from './artists/s';
import t from './artists/t';
import v from './artists/v';

const palettes: Scheme[] = [
	...b,
	...c,
	...d,
	...f,
	...g,
	...h,
	...j,
	...k,
	...l,
	...m,
	...n,
	...o,
	...p,
	...r,
	...s,
	...t,
	...v,
];
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

export { palettes, getPalette };
