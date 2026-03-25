import { PhysicsObject, Objects } from "@/types";
import { DEFAULT_OBJECT } from "@/const";

export const createObject = (
    char: string,
    position: { x?: number, y?: number },
    mass: number = 1.0,
    rest: number = 0.3,
    isStatic: boolean = false,
    friction: number = 0.3,
    initialVelocity: { vx?: number, vy?: number },
): PhysicsObject => {
    return {
        char,
        position: {
            x: position.x ?? DEFAULT_OBJECT.position.x,
            y: position.y ?? DEFAULT_OBJECT.position.y },
        velocity: {
            vx: initialVelocity.vx ?? DEFAULT_OBJECT.velocity.vx,
            vy: initialVelocity.vy ?? DEFAULT_OBJECT.velocity.vy,
        },
        mass,
        restitution: rest,  // 弾性係数
        isStatic,
        friction,      // 摩擦係数
    }
}

export const initObjects = (): Objects => {
    return [
    ]
}
