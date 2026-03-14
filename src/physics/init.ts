import { PhysicsObject, Objects } from "@/types";

export const createObject = (char: string, position: { x: number, y: number }, isStatic: boolean = false, initialVelocity: { vx: number, vy: number } = { vx: 0, vy: 0 }): PhysicsObject => {
    return {
        char,
        position,
        velocity: { vx: initialVelocity.vx, vy: initialVelocity.vy},
        mass: 1.0,
        restitution: 0.25,
        isStatic: isStatic,
    }
}

export const initObjects = (): Objects => {
    return [
        createObject("ぶ", { x: 23, y: 20 }, false, { vx: 20, vy: 20 }),
        createObject("い", { x: 24, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("〜", { x: 25, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("ん", { x: 26, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("あ", { x: 27, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("あ", { x: 28, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("あ", { x: -10, y: 0 }, false, { vx: 10, vy: 0 }),
        createObject("あ", { x: -10, y: 20 }, false, { vx: 12, vy: 0 }),
        createObject("あ", { x: -10, y: 20 }, false, { vx: 14, vy: 0 }),
        createObject("あ", { x: 26, y: 20 }, false, { vx: 0, vy: 20 }),
        createObject("あ", { x: 27, y: 20 }, false, { vx: 0, vy: 50 }),
        createObject("あ", { x: 28, y: 20 }, false, { vx: -1, vy: -20 }),
        createObject("あ", { x: 28, y: 20 }, false, { vx: -0.25, vy: -20 }),
        createObject("全", { x: 20, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("て", { x: 21, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("バ", { x: 22, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("イ", { x: 23, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("ナ", { x: 24, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("リ", { x: 25, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("の", { x: 26, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("所", { x: 27, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("為", { x: 28, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("で", { x: 29, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("す", { x: 30, y: 50 }, true, { vx: 0, vy: 0 }),
        createObject("。", { x: 31, y: 50 }, true, { vx: 0, vy: 0 }),
    ]
}
