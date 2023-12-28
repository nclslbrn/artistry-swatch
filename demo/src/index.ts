import { Scheme } from './../../src/index';
import { palettes, getPalette } from '../../src/index';
import { div, colorBlock } from './colorBlock';
import { sampler } from './sampler';

const app = document.getElementById('app'),
	form = document.createElement('form'),
	paletteCount = document.createElement('h1'),
	inputSearch = document.createElement('input'),
	paletteGrid = div('palette-grid');

const filteredPalette = (input: string) => {
	if (input == '') return palettes;
	const reg = new RegExp(input.toLowerCase());
	return palettes.filter(function (p: Scheme) {
		if (p.meta.artist.toLowerCase().match(reg)) return p;
	});
};

if (app !== null) {
	form.autocomplete = 'off';
	form.appendChild(paletteCount);
	form.appendChild(inputSearch);
	app.appendChild(form);
	app.appendChild(paletteGrid);
	app.appendChild(sampler.ui());
	paletteCount.innerText = `${palettes.length} iconic palettes`
	palettes.forEach((palette) => paletteGrid.appendChild(colorBlock(palette)));
	inputSearch.placeholder = 'type an artist name';
	inputSearch.onkeyup = function (e: KeyboardEvent): void {
		paletteGrid.innerHTML = '';
		const results = filteredPalette((e.target as HTMLInputElement).value);
		results.forEach((palette) => paletteGrid.appendChild(colorBlock(palette)));
	};
}
