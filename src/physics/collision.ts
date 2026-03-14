import { PHYSICS } from "@/const";
import { PhysicsObject, Grid } from "@/types";

const detectCollisionX = (obj: PhysicsObject, grid: Grid): PhysicsObject | null => {
    let destX = Math.floor(obj.position.x + obj.velocity.vx * PHYSICS.DT_S);
    let currY = Math.floor(obj.position.y);
    return grid[currY]?.[destX] ?? null;
}

const detectCollisionY = (obj: PhysicsObject, grid: Grid): PhysicsObject | null => {
    let destY = Math.floor(obj.position.y + obj.velocity.vy * PHYSICS.DT_S);
    let currX = Math.floor(obj.position.x);
    return grid[destY]?.[currX] ?? null;
}

const resolveCollisionX = (obj: PhysicsObject, target: PhysicsObject): void => {
    const restitution = (obj.restitution + target.restitution) / 2;
    obj.velocity.vx *= -restitution;
}

const resolveCollisionY = (obj: PhysicsObject, target: PhysicsObject): void => {
    const restitution = (obj.restitution + target.restitution) / 2;
    obj.velocity.vy *= -restitution;
}

export const handleCollision = (obj: PhysicsObject, grid: Grid): void => {
    const targetX = detectCollisionX(obj, grid);
    if (targetX) resolveCollisionX(obj, targetX);

    const targetY = detectCollisionY(obj, grid);
    if (targetY) resolveCollisionY(obj, targetY);
}
