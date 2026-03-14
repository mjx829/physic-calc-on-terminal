import { GRID } from "@/const";
import { Grid } from "@/types";

export const initGrid = (gridWidth?: number, gridHeight?: number): Grid => {
    const width = gridWidth ?? GRID.WIDTH;
    const height = gridHeight ?? GRID.HEIGHT;

    let grid: Grid = [];
    for (let y = 0; y < height; y++) {
        grid.push([]);
        for (let x = 0; x < width; x++) {
            grid[y].push(null);
        }
    }

    return grid;
}

export const copyGrid = (src: Grid, dst: Grid): void => {
    for (let y = 0; y < src.length; y++) {
        for (let x = 0; x < src[y].length; x++) {
            dst[y][x] = src[y][x];
        }
    }
}
