import { PHYSICS, RENDER } from "./const";
import { Grid, Objects } from "./types";
import { physicsUpdate } from "./physics/update";
import { render } from "./render/renderer";

export const startLoop = (objects: Objects, grid: Grid): void => {
    let accumulator = 0;
    let lastTime = performance.now();

    const loop = () => {
        const now = performance.now();
        accumulator += (now - lastTime) / 1000;
        lastTime = now;

        while (accumulator >= PHYSICS.DT_S) {
            physicsUpdate(objects, grid);
            accumulator -= PHYSICS.DT_S;
        }

        render(grid);
        setTimeout(loop, RENDER.DT_S * 1000);
    }
    
    loop();
}
