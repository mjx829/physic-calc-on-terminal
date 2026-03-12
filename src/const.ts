export const PHYSICS = {
    GRAVITY_M_S2: 9.8,
    V_MAX_M_S: 62.5,    // 1 / DT_S
    DT_S: 0.016,
} as const

export const GRID = {
    WIDTH: 80,
    HEIGHT: 40,
} as const

export const RENDER = {
    FPS: 60,
    DT_S: 1 / 60, 
    CELL_WIDTH: 2,      // 描画時の縦横比補正
} as const
