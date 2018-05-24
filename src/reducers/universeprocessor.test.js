import step from './universeprocessor';

describe('universe processor', () => {
  
    let universe = { width: 4, cells: [] };

    beforeEach(() => {
        universe.cells = [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false
        ];
    });
  
    it('Any live cell with fewer than two (0) live neighbors dies, as if by under population.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 0, 0, 1, 0
    // 0, 0, 0, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[6] = true;
        expect(step(universe).cells[6]).toEqual(false);
    });
    it('Any live cell with fewer than two (1) live neighbors dies, as if by under population.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 0, 1, 1, 0
    // 0, 0, 0, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[5] = true;
        universe.cells[6] = true;
        expect(step(universe).cells[5]).toEqual(false);
    });
    it('Any live cell with two 2 or three live neighbors lives on to the next generation.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 1, 0, 1, 0
    // 0, 1, 0, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[4] = true;
        universe.cells[6] = true;
        universe.cells[9] = true;
        expect(step(universe).cells[9]).toBe(true);
    });
    it('Any live cell with two or three 3 live neighbors lives on to the next generation.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 1, 1, 1, 0
    // 0, 1, 0, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[4] = true;
        universe.cells[5] = true;
        universe.cells[6] = true;
        universe.cells[9] = true;
        expect(step(universe).cells[5]).toBe(true);
    });
    it('Any live cell with more than three live neighbors dies, as if by overpopulation.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 1, 1, 1, 0
    // 0, 1, 1, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[4] = true;
        universe.cells[5] = true;
        universe.cells[6] = true;
        universe.cells[9] = true;
        universe.cells[10] = true;
        expect(step(universe).cells[9]).toBe(false);  
    });
    it('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', () => { 
    /*************/
    // 0, 0, 0, 0
    // 1, 1, 1, 0
    // 0, 0, 0, 0
    // 0, 0, 0, 0
    /*************/
        universe.cells[4] = true;
        universe.cells[5] = true;
        universe.cells[6] = true;
        expect(step(universe).cells[9]).toBe(true);
    });
});