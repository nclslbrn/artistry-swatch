import { Scheme } from './../type.d';

const gentileschi: Scheme = {
	meta: {
		title: 'Self-portrait as the Allegory of Painting or La Pittura',
		artist: 'Artemisia Gentileschi',
		year: '1639',
		techniques: 'Oil',
	},
	background: '#1b1006',
	colors: ['#4c2d15', '#634a2c', '#dfb484'],
	stroke: '#788457',
	temp: 'warm',
	theme: 'dark',
};

const giacometti: Scheme = {
	meta: {
		title: 'Jean Genet Portrait',
		artist: 'Alberto Giacometti',
		year: '1954',
		techniques: 'Oil',
	},
	background: '#e2d9cd',
	colors: ['#383739', '#B06438', '#59535C', '#302927'],
	stroke: '#655C44',
	temp: 'warm',
	theme: 'bright',
};

const goldin: Scheme = {
	meta: {
		title: 'Cookie and Sharon dancing in the Back Room',
		artist: 'Nan Goldin',
		year: '1976',
		techniques: 'Cibachrome',
	},
	background: '#050506',
	colors: ['#766a4e', '#b07443', '#fab38b'],
	stroke: '#0a443b',
	temp: 'warm',
	theme: 'dark',
};

const greco: Scheme = {
	meta: {
		title: 'Laocoön',
		artist: 'El Greco',
		year: '1610',
		techniques: 'Oil',
	},
	background: '#568c99',
	colors: ['#3e7178', '#364d50', '#1e1f1b', '#cebda6', '#d4cab0'],
	stroke: '#908f7a',
	temp: 'cold',
	theme: 'bright',
};

export { gentileschi, giacometti, goldin, greco };
