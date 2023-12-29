import { Scheme } from './../type.d';

const picasso: Scheme = {
	meta: {
		title: 'A Girl Before A Mirror',
		artist: 'Pablo Picasso',
		year: '1903',
		techniques: 'Oil',
	},
	background: '#1e1c1d',
	colors: ['#7fad91', '#b7573e', '#ee963f', '#daca6a', '#475294', '#798eab'],
	stroke: '#ccc0ce',
	temp: 'warm',
	theme: 'dark',
};

const pollard: Scheme = {
	meta: {
		title: 'Oceans apart',
		artist: 'Ingrid Pollard',
		year: '1989',
		techniques: 'photography',
	},
	background: '#d8d6ce',
	colors: ['#917439', '#2c6d4f', '#5e7b2d'],
	stroke: '#1a1614',
	temp: 'cold',
	theme: 'bright',
};

const pollock: Scheme = {
	meta: {
		title: 'Number 1',
		artist: 'Jackson Pollock',
		year: '1949',
		techniques: 'Enamel and metallic paint',
	},
	background: '#1A1C23',
	colors: ['#D89CA9', '#1962A0', '#E8C051'],
	stroke: '#F1ECD7',
	temp: 'warm',
	theme: 'dark',
};

export { picasso, pollard, pollock };
