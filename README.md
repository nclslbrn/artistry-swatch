# canvas-colors

A package to get random palette from iconic painting of art history

## Installation

```
npm install @nclslbrn/canvas-colors
```

- or - 
```
yarn add @nclslbrn/canvas-colors
```


## How use it

```
import { getPalette } from '@nclslbrn/canvas-colors'

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


### Palette object

The function getPalette return a palette or false if nothing match your criteria.
Every color is defined by an hexadecimal value (# include) without alpha.
Each palette has a `background` and a `stroke` (single color) and `colors` with multiple colors.
There is also some informations about the origin of the palette in `meta` (title, artist, year and techniques)  