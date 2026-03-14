import { log } from "./utils/logger";
import { initGrid } from "./core/grid";
import { createObject, initObjects } from "./physics/init"
import { initDisplay, cleanupDisplay } from "./render/init";
import { startLoop } from "./loop";

process.on("uncaughtException", (e) => {
    log.write("ERROR", `uncaught exception. (${(e as Error).message})(${(e as Error).stack})`);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    const message = reason instanceof Error ? reason.message : String(reason);
    const stack = reason instanceof Error ? reason.stack : "";
    log.write("ERROR", `unhandled rejection. (${message})(${stack})`);
    process.exit(1);
});

function main() {
    try {
        log.write("INFO", 'process starting...');
        initDisplay();

        const grid = initGrid();
        const objects = initObjects();
        startLoop(objects, grid);


        setTimeout(() => {objects.push(createObject("あ", { x: -10, y: 20 }, false, { vx: 14, vy: 0 }))}, 10000)
        setTimeout(() => {objects.push(createObject("あ", { x: -10, y: 20 }, false, { vx: 15, vy: 0 }))}, 22500)

        process.on("SIGTERM", () => { 
            cleanupDisplay();
            process.exit(0);
        });
    } catch (e) {
        log.write("ERROR", `failed to start. (${(e as Error).message})(${(e as Error).stack})`);
        process.exit(1);
    }
}

main();
