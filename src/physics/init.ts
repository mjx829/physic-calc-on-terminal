import { PhysicsObject } from "@/types";

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
