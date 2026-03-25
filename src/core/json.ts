import * as fs from "fs";
import * as path from "path";
import { parse } from "smol-toml";
import { log } from "@/utils/logger";
import { PhysicsObject, PhysicsObjectConfig, PhysicsObjectConfigSchema} from "@/types";
import { createObject } from "@/physics/init";

const loadFile = (filePath: string) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');

        // log.write("INFO", `file was loaded. (${filePath}`);
        return parse(data);
    } catch (e) {
        log.write("WARN", `failed to load file. (${filePath})`);
    }
}

const parseImportedObj = (data: any): PhysicsObject[] => {
    try {
        const config: PhysicsObjectConfig = PhysicsObjectConfigSchema.parse(data);
        const defaultVal = config.default;
        let objs: PhysicsObject[] = [];

        for (const obj of config.objects) {
            objs.push(createObject(
                obj.char, 
                {
                    x: obj.position?.x ?? defaultVal?.position?.x,
                    y: obj.position?.y ?? defaultVal?.position?.y,
                },
                obj.mass ?? defaultVal?.mass,
                obj.restitution ?? defaultVal?.restitution,
                obj.isStatic ?? defaultVal?.isStatic, 
                obj.friction ?? defaultVal?.friction,
                {
                    vx: obj.velocity?.vx ?? defaultVal?.velocity?.vx,
                    vy: obj.velocity?.vy ?? defaultVal?.velocity?.vy,
                },
            ));
        }

        return objs;
    } catch (e) {
        log.write("WARN", `failed to parse config.`);
    }

    return [];
}

export const loadInitObjects = (pathName: string): PhysicsObject[] => {
    const data = loadFile(pathName);
    if (!data) return [];

    const obj = parseImportedObj(data);

    return obj;
}
