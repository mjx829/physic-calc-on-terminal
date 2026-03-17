import { PHYSICS } from "@/const";
import { PhysicsObject, Grid } from "@/types";

const detectCollisionX = (obj: PhysicsObject, grid: Grid): PhysicsObject | null => {
    let destX = Math.floor(obj.position.x + obj.velocity.vx * PHYSICS.DT_S);
    let currY = Math.floor(obj.position.y);
    const target = grid[currY]?.[destX] ?? null;
    if (target === obj) return null;
    return target;
}

const detectCollisionY = (obj: PhysicsObject, grid: Grid): PhysicsObject | null => {
    let destY = Math.floor(obj.position.y + obj.velocity.vy * PHYSICS.DT_S);
    let currX = Math.floor(obj.position.x);
    const target = grid[destY]?.[currX] ?? null;
    if (target === obj) return null;
    return target;
}

const resolveCollisionX = (obj: PhysicsObject, target: PhysicsObject): void => {
    const restitution = (obj.restitution + target.restitution) / 2;
    const objVx = obj.velocity.vx
    const targetVx = target.velocity.vx;

    obj.velocity.vx = (targetVx - objVx) * restitution;
    if (!target.isStatic) {
        target.velocity.vx = (objVx - targetVx) * restitution;
    }
}

const resolveCollisionY = (obj: PhysicsObject, target: PhysicsObject): void => {
    const restitution = (obj.restitution + target.restitution) / 2;
    const objVy = obj.velocity.vy
    const targetVy = target.velocity.vy;

    obj.velocity.vy = (targetVy - objVy) * restitution;
    if (!target.isStatic) {
        target.velocity.vx = (objVy - targetVy) * restitution;
    }
}

export const handleCollision = (obj: PhysicsObject, grid: Grid): void => {
    const targetX = detectCollisionX(obj, grid);
    if (targetX) resolveCollisionX(obj, targetX);

    const targetY = detectCollisionY(obj, grid);
    if (targetY) resolveCollisionY(obj, targetY);
}
