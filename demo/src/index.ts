import { Scheme } from './../../src/type.d';
import { palettes, getPalette } from '../../src/index';
import { div, colorBlock } from './colorBlock';
import { tableHead, paletteRow } from './paletteRow';
import { sampler } from './sampler';

const app = document.getElementById('app'),
	form = document.createElement('form'),
	paletteCount = document.createElement('h1'),
	inputSearch = document.createElement('input'),
	params = new URLSearchParams(window.location.search),
	mode = params.get('m') === 'table' ? 'table' : 'grid',
	table = document.createElement('table'),
	container =
		mode === 'grid' ? div('palette-grid') : document.createElement('tbody'),
	swapViewButton = document.createElement('a');

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
	swapViewButton.href = mode === 'grid' ? '?m=table' : '?m=grid';
	swapViewButton.innerText = mode === 'grid' ? 'Table' : 'Grid';
	form.appendChild(swapViewButton);
	app.appendChild(form);
	paletteCount.innerText = `${palettes.length} iconic palettes`;
	if (mode === 'grid') {
		app.appendChild(container);
	} else {
		table.appendChild(tableHead());
		table.appendChild(container);
		app.appendChild(table);
	}
	palettes.forEach((palette) =>
		container.appendChild(
			mode === 'grid' ? colorBlock(palette) : paletteRow(palette)
		)
	);
	app.appendChild(sampler.ui());

	inputSearch.placeholder = 'type an artist name';
	inputSearch.onkeyup = function (e: KeyboardEvent): void {
		container.innerHTML = '';
		const results = filteredPalette((e.target as HTMLInputElement).value);
		results.forEach((palette) =>
			container.appendChild(
				mode === 'grid' ? colorBlock(palette) : paletteRow(palette)
			)
		);
	};
}
