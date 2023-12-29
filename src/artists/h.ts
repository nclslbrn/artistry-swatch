import { Scheme } from './../type.d';

const hockney: Scheme = {
	meta: {
		title: 'A Bigger Splash',
		artist: 'David Hockney',
		year: '1967',
		techniques: 'Acrylic',
	},
	background: '#eddebf',
	colors: ['#53a4b7', '#bf9a91', '#a28671', '#88c9e5', '#317ca6'],
	stroke: '#40696b',
	temp: 'warm',
	theme: 'bright',
};

const hopper: Scheme = {
	meta: {
		title: 'New York Movie',
		artist: 'Edward Hopper',
		year: '1939',
		techniques: 'Oil',
	},
	background: '#ebcf61',
	colors: ['#c56e29', '#879981', '#cb4f29', '#2d74a8', '#4c5947'],
	stroke: '#2c211d',
	temp: 'warm',
	theme: 'bright',
};

export { hockney, hopper };
