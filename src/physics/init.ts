import { GRID } from "./const";
import { PhysicsObject, Grid } from "./types";

export const initGrid = (gridWidth?: number, gridHeight?: number): Grid => {
    const width = gridWidth ?? GRID.WIDTH;
    const height = gridHeight ?? GRID.HEIGHT;

    let grid: Grid = [];
    for (let heightI = 0; heightI < height; heightI++) {
        grid.push([]);
        for (let widthI = 0; widthI < width; widthI++) {
            grid[heightI].push(null);
        }
    }

    return grid;
}

export const createObject = (char: string, position: { x: number, y: number }, isStatic: boolean = false, initialVelocity: { vx: number, vy: number } = { vx: 0, vy: 0 }): PhysicsObject => {
    return {
        char,
        position,
        velocity: { vx: initialVelocity.vx, vy: initialVelocity.vy},
        mass: 1.0,
        restitution: 0.8,
        isStatic: isStatic,
    }
}
