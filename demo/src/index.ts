import { Scheme } from './../../src/index';
import { palettes, getPalette } from '../../src/index';

const div = (className: string): HTMLElement => {
	const elem = document.createElement('div');
	elem.className = className;
	return elem;
};

const app = document.getElementById('app'),
    form = document.createElement('form'),
    input = document.createElement('input'),
    paletteGrid = div('palette-grid');

const colorBlock = (palette: Scheme): HTMLElement => {
	const block = div(`palette-block ${palette.theme}`);
	block.style.backgroundColor = palette.background;

	const colors = div(`colors col-${palette.colors.length}`);
	palette.colors.forEach((color) => {
		const colDiv = div('color');
		colDiv.style.backgroundColor = color;
		colDiv.style.border = `${Math.round(Math.random() * 8)}px solid ${
			palette.stroke
		}`;
		colors.appendChild(colDiv);
	});
	const meta = div('palette-meta');
	meta.innerHTML = `
  <h3>${palette.meta.artist}</h3>
	<p>${palette.meta.title}</p>
	<label>
		<span>${palette.meta.year}</span>
		<span>${palette.meta.techniques}</span>
	</label>`;

	block.appendChild(colors);
	block.appendChild(meta);
	block.addEventListener('click', function () {
		navigator.clipboard.writeText(JSON.stringify(palette));
	});
	return block;
};

const filteredPalette = (input: string) => {
    if (input == '') return palettes
    const reg = new RegExp(input.toLowerCase())
    return palettes.filter(function(p: Scheme) {
        if (p.meta.artist.toLowerCase().match(reg)) return p
    })
}

if (app !== null) {
    form.autocomplete = 'off'
    form.appendChild(input)
    app.appendChild(form)
    app.appendChild(paletteGrid)
	palettes.forEach((palette) => paletteGrid.appendChild(colorBlock(palette)));
    input.placeholder = 'type an artist name'
    input.onkeyup = function(e: KeyboardEvent): void {
        paletteGrid.innerHTML = ''
        const results = filteredPalette((e.target as HTMLInputElement).value)
        results.forEach((palette) => paletteGrid.appendChild(colorBlock(palette)));
    }
}
