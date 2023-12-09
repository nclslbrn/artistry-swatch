import { palettes, getPalette } from "../src/index.ts";

describe("Test each palette data", () => {
  palettes.forEach(palette => {
    test(`${palette.meta.artist} - ${palette.meta.title}`, () => {
      expect(palette.background).not.toBeUndefined();
      expect(palette.stroke).not.toBeUndefined();
      expect(palette.colors.length).toBeGreaterThan(0);
      expect(palette.temp).toMatch(/(warm|cold|neutral)/i)
      expect(palette.theme).toMatch(/(bright|dark)/i)
      expect(palette.meta.title).not.toBeUndefined();
      expect(palette.meta.artist).not.toBeUndefined();
      expect(palette.meta.year).not.toBeUndefined();
      expect(palette.meta.techniques).not.toBeUndefined();
    })
  })
})

test("Test warm palette query", () => {
  expect(getPalette({ temp: 'warm'})).toHaveProperty('temp', 'warm')
})

test("Test cold palette query", () => {
  expect(getPalette({ rand: Math.random(), temp: 'cold'})).toHaveProperty('temp', 'cold')
})

test("Test bright palette query", () => {
  expect(getPalette({ theme: 'bright'})).toHaveProperty('theme', 'bright')
})

test("Test dark palette query", () => {
  expect(getPalette({ theme: 'dark'})).toHaveProperty('theme', 'dark')
})

const giacomettiMeta = {
  title: "Jean Genet Portrait",
  artist: "Alberto Giacometti",
  year: "1954", 
  techniques: "Oil"
}
test("Test artist query", () => {
  expect(getPalette({ artist: 'Alberto Giacometti'})).toHaveProperty('meta', giacomettiMeta)
})