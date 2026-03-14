import { RENDER } from "@/const";
import { Grid, Cell } from "@/types"
import { initGrid, copyGrid } from "@/core/grid";

let prevGrid: Grid = initGrid();

/*
const moveCursor = (x: number, y: number): void => {
    process.stdout.write(`\x1b[${y};${x * RENDER.CELL_WIDTH}H`);
}

const drawCell = (x: number, y: number, cell: Cell): void => {
    moveCursor(x, y);
    if (cell) {
        process.stdout.write(cell.char);
    } else {
        process.stdout.write(" ");
    }
}
*/

const renderDiff = (prevGrid: Grid, currGrid: Grid): void => {
    let output = '';
    for (let y = 0; y < currGrid.length; y++) {
        for (let x = 0; x < currGrid[y].length; x++) {
            if (currGrid[y][x] !== prevGrid[y][x]) {
                output += `\x1b[${y};${x * RENDER.CELL_WIDTH}H`;
                output += currGrid[y][x]?.char ?? ' ';
            }
        }
    }
    if (output) process.stdout.write(output);
}

export const render = (currGrid: Grid): void => {
    renderDiff(prevGrid, currGrid);
    copyGrid(currGrid, prevGrid);
}
