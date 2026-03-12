import { Grid, Cell } from "@/types"
import { initGrid } from "../physics/init"

const isSameGrids = (gridA: Grid, gridB: Grid): boolean => {
    if (gridA.length !== gridB.length) return false;
    if (gridA[0].length !== gridB[0].length) return false;
    
    return true;
}

const moveCursor = (x: number, y: number): void => {
    process.stdout.write(`\e[${x};${y}H`);
}

const drawCell = (x: number, y: number, cell: Cell): void => {
    moveCursor(x, y);
    if (cell) {
        process.stdout.write(cell.char);
    } else {
        process.stdout.write("");
    }
}

const compareGrids = (prevGrid: Grid, currGrid: Grid) => {
    if (!isSameGrids(prevGrid, currGrid)) return false;

    for (let y = 0; y < currGrid.length; y++) {
        for (let x = 0; x < currGrid[y].length; x++) {
            if (currGrid[y][x] !== prevGrid[y][x]) {
                drawCell(x, y, currGrid[y][x]);
            }
        }
    }
}
