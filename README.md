# iconic-palettes

A package to get random palette from iconic painting of art history

## Installation

```
npm install @nclslbrn/artistry-swatch
```

- or -
```
yarn add @nclslbrn/artistry-swatch
```


## How use it

```
import { getPalette } from '@nclslbrn/artistry-swatch'

// No filter
const palette = getPalette()

// Specify a random value ($fx.rand() for exemple)
const palette = getPalette({ rand: 0.6 })

// Specify temperature of palette
const palette = getPalette({ temp: 'warm' })

// Specify if you want an inverted palette (dark background with bright colors)
const palette = getPalette({ theme: 'dark' })

// Specify an artist
const palette = getPalette({ artist: "Albrecht Dürer"})
```
| Parameters | Value                                       | Default       |
|------------|---------------------------------------------|---------------|
| rand       | float between 0 & 1                         | Math.random() |
| temp       | string (cold, warm or any)                  | any           |
| theme      | string (bright, dark or any)                | any           |
| artist     | string (artist firstname + lastname or any) | any           |


## Returned palette object

The function getPalette return a palette or false if nothing match your criteria.

Every color is defined by an hexadecimal value (# include) without alpha.

Each palette has a `background` and a `stroke` (single color) and `colors` with multiple colors.

There is also some informations about the origin of the palette in `meta` (title, artist, year and techniques)

The getPalette will return only one palette, here is an exemple.

```
{
  background: "#1C2424",
  colors: ["#3D55A8", "#3FA622", "#F6F7F1", "#463D33"],
  stroke: "#6A6157",
  temp : "cold",
  theme: "dark",
  meta: {
    title: "Stained glass composition, Woman",
    artist: "Theo van Doesburg",
    year: "1917",
    techniques: "Glass",
  }
}
```
