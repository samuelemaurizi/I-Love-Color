import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  // create colors key based on the levels var and the value to an empty array
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }

  return newPalette;
}

// create an arry with three color values start darking the color with a value of 1.4, then the original color and close with the white color.
function getRange(hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function generateScale(hexColor, numberOfColor) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColor);
}

export { generatePalette };
