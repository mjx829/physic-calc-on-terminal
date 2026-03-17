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
