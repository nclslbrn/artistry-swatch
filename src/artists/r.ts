import { Scheme } from './../type.d';

const riley: Scheme = {
	meta: {
		title: 'Movement in Squares',
		artist: 'Bridget Riley',
		year: '1961',
		techniques: 'Synthetic emulsion on board',
	},
	background: '#1b4b5f',
	colors: [
		'#c84054',
		'#c3982b',
		'#4260b8',
		'#2e8162',
		'#185bc3',
		'#b877b1',
		'#adc370',
	],
	stroke: '#e3ddc2',
	temp: 'cold',
	theme: 'dark',
};

const rothko: Scheme = {
	meta: {
		artist: 'Mark Rothko',
		title: 'No. 10',
		year: '1950',
		techniques: 'Oil',
	},
	background: '#4b5779',
	colors: ['#5c6485', '#8c8b88', '#c1995b'],
	stroke: '#71625b',
	temp: 'cold',
	theme: 'bright',
};

export { riley, rothko };
