const colours = [
  'goldenrod',
  'hotpink',
  'green',
];

export default function changeColour(colour = colours[0], action) {
  if (action.type === 'CHANGE_COLOUR') {
    return action.colour || colours[(colours.indexOf(colour) + 1) % colours.length];
  }

  return colour;
}
