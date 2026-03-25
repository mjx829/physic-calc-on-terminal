import { log } from "./utils/logger";
import { initGrid } from "./core/grid";
import { initDisplay, cleanupDisplay } from "./render/init";
import { startLoop } from "./loop";
import { loadInitObjects } from "@/core/json";
import * as path from "path";

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
        const configPath = path.join(__dirname, "./json/test.toml");
        const objects = loadInitObjects(configPath);
        startLoop(objects, grid);



        process.on("SIGTERM", () => { 
            cleanupDisplay();
            process.exit(0);
        });
        process.on("SIGINT", () => { 
            cleanupDisplay();
            process.exit(0);
        });
    } catch (e) {
        log.write("ERROR", `failed to start. (${(e as Error).message})(${(e as Error).stack})`);
        process.exit(1);
    }
}

main();
