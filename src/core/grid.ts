import { GRID } from "@/const";
import { Grid, Objects } from "@/types";

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

export const clearGrid = (grid: Grid): void => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            grid[y][x] = null;
        }
    }
}

export const projectToGrid = (grid: Grid, objects: Objects): void => {
    clearGrid(grid);
    for (const obj of objects) {
        const x = Math.floor(obj.position.x);
        const y = Math.floor(obj.position.y);
        if (x >= 0 && x < GRID.WIDTH && y >= 0 && y < GRID.HEIGHT) {
            grid[y][x] = obj;
        }
    }
}
