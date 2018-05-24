
const processCell = (universe) => (v, ix) => {
  let naighboursNr = [
    universe.cells[(ix-universe.width) - 1],
    universe.cells[(ix-universe.width)],
    universe.cells[(ix-universe.width) + 1],
    universe.cells[ix - 1],
    universe.cells[ix + 1],        
    universe.cells[(ix+universe.width) - 1],
    universe.cells[(ix+universe.width)],
    universe.cells[(ix+universe.width) + 1],
  ].filter(i => i).length;
  if(!v)
    return naighboursNr === 3;
  return (naighboursNr === 2 || naighboursNr === 3);
};

export default universe => {
  return { ...universe, cells: universe.cells.map(processCell(universe)) };
};