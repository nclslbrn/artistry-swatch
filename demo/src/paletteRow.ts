import { Scheme } from './../../src/type';

const td = (content: string, className: string): HTMLElement => {
	const cell = document.createElement('td');
	cell.innerHTML = content;
	cell.classList.add(className);
	return cell;
};
const singleCol = (color: string): HTMLElement => {
	const colBlock = document.createElement('span');
	colBlock.style.backgroundColor = color;
	return colBlock;
};

const tableHead = (): HTMLElement => {
	const thead = document.createElement('thead');
	const tr = document.createElement('tr');
	['Artist', 'Work', 'Background', 'Stroke', 'Colors'].forEach((label) => {
		const th = document.createElement('th');
		th.innerText = label;
		th.classList.add(label.toLowerCase());
		tr.appendChild(th);
	});
	thead.appendChild(tr);
	return thead;
};

const paletteRow = (palette: Scheme): HTMLElement => {
	const tr = document.createElement('tr');

	const artistTD = td(`<h2>${palette.meta.artist}</h2>`, 'artist');
	const workTD = td(
		`
  <h3>${palette.meta.title}</h3>
  <p>${palette.meta.techniques}</p>
  <p>${palette.meta.year}</p>
  `,
		'work'
	);

	const bgTD = td('', 'background');
	bgTD.appendChild(singleCol(palette.background));
	const stTD = td('', 'stroke');
	stTD.appendChild(singleCol(palette.stroke));
	const colorsTD = td('', 'colors');
	palette.colors.forEach((col) => colorsTD.appendChild(singleCol(col)));

	tr.appendChild(artistTD);
	tr.appendChild(workTD);
	tr.appendChild(bgTD);
	tr.appendChild(stTD);
	tr.appendChild(colorsTD);

	return tr;
};

export { paletteRow, tableHead };
