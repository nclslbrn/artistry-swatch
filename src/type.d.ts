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

export interface EntryScheme {
	[name: string]: Scheme;
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
