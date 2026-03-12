import { Grid } from "@/types"
import { initGrid } from "../physics/init"

const moveCursor = (x: number, y: number): void => {
    process.stdout.write(`\e[${x};${y}H`);
}

const drawCell = (x: number, y: number, char: string): void => {
    moveCursor(x, y);
    process.stdout.write(char);
}

const render = (grid: Grid): void => {
    
}
