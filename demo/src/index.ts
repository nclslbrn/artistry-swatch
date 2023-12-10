import { Scheme } from './../../src/index';
import { palettes, getPalette } from "../../src/index"

const div = (className: string): HTMLElement => {
	const elem = document.createElement('div');
	elem.className = className;
	return elem;
};

const colorBlock = (palette: Scheme): HTMLElement => {
	const block = div(`palette-block ${palette.theme}`);
	block.style.backgroundColor = palette.background;
	block.style.color = palette.stroke;
	
	const colors = div(`colors col-${palette.colors.length}`);
	palette.colors.forEach((color) => {
		const colDiv = div('color');
		colDiv.style.backgroundColor = color;
    colDiv.style.border = `${Math.round(Math.random()*6)}px solid ${palette.stroke}`;
		colors.appendChild(colDiv);
	});
  const meta = div('palette-meta')
  meta.innerHTML = `
  <h3 
    title="${palette.meta.title}, ${palette.meta.year}, ${palette.meta.techniques}">
    ${palette.meta.artist}
  </h3>`;
  
  block.appendChild(colors);
  block.appendChild(meta)
	block.addEventListener('click', function () {
		navigator.clipboard.writeText(JSON.stringify(palette));
	});
	return block;
};

const app = document.getElementById('app');
if (app !== null) {
  palettes.forEach((palette) => app.appendChild(colorBlock(palette)));
}