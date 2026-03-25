import { PhysicsObject } from "@/types"

export const PHYSICS = {
    GRAVITY_M_S2: 19,
    V_MAX_M_S: 480,    // 1 / DT_S
    DT_S: 1 / 480,
} as const

export const GRID = {
    WIDTH: 100,
    HEIGHT: 60,
} as const

export const RENDER = {
    FPS: 120,
    DT_S: 1 / 120, 
    CELL_WIDTH: 2,      // 描画時の縦横比補正
} as const

export const DEFAULT_OBJECT: PhysicsObject = {
    char: "あ",
    position: { x: 0, y: 0 },
    velocity: { vx: 0, vy: 0 },
    mass: 1.0,
    restitution: 0.3,
    isStatic: false,
    friction: 0.3,
}
