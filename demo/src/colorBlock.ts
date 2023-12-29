import { Scheme } from './../../src/type';

const div = (className: string): HTMLElement => {
	const elem = document.createElement('div');
	elem.className = className;
	return elem;
};

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

export { div, colorBlock };
