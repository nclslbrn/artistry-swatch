import ColorThief from './color-thief.mjs';
import { Scheme } from './../../src/type';
import { div, colorBlock } from './colorBlock';

type TGenericEvent<T> = Event & { target: T };

const rgbToHex = (rgb: number[]): string =>
	'#' +
	rgb
		.map((x) => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		})
		.join('');

const parsePalette = (colArray: number[][], filename: string): Scheme => {
	const colHex = colArray.map((col) => rgbToHex(col));
	const background = colHex[0];
	const stroke = colHex[colHex.length - 1];
	const colors = colHex.splice(1, colHex.length - 3);
	return {
		meta: {
			title: filename,
			artist: '',
			year: '',
			techniques: '',
		},
		background,
		colors,
		stroke,
		temp: 'neutral',
		theme: 'bright',
	} as Scheme;
};

const sampler = {
	colorThief: new ColorThief(),
	img: document.createElement('img'),
	inputFile: document.createElement('input'),
	paletteBlock: div('palette-out'),
	codeOut: document.createElement('pre'),
	createPalette: (filename: string) => {
		const sampledColor = sampler.colorThief.getPalette(sampler.img);
		const palette = parsePalette(sampledColor, filename);
		sampler.paletteBlock.innerHTML = '';
		sampler.paletteBlock.appendChild(colorBlock(palette));
		sampler.codeOut.innerHTML = JSON.stringify(palette);
	},
	ui(): HTMLElement {
		const createPaletteBlock = document.createElement('div');
		createPaletteBlock.classList.add('create-palette');
		createPaletteBlock.innerHTML = '<h3>Sample a palette from an image</h3>';
		createPaletteBlock.innerHTML +=
			'<small>Color extraction with <a href="https://github.com/lokesh/color-thief">color-thief</a>';
		sampler.inputFile.type = 'file';
		createPaletteBlock.appendChild(sampler.img);
		createPaletteBlock.appendChild(sampler.inputFile);
		createPaletteBlock.appendChild(sampler.paletteBlock);
		createPaletteBlock.appendChild(sampler.codeOut);

		sampler.inputFile.addEventListener('change', (e: Event) => {
			if (e.target !== null) {
				const files = <FileList>(<HTMLInputElement>e.target).files,
					reader = new FileReader();
				console.log(files);
				let url = window.URL.createObjectURL(files[0]);
				sampler.img.src = url;

				if (sampler.img.complete) {
					sampler.createPalette(files[0].name);
				} else {
					sampler.img.onload = () => sampler.createPalette(files[0].name);
				}
			}
		});
		return createPaletteBlock;
	},
};

export { sampler };
