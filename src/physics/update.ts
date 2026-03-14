import { PHYSICS } from "@/const";
import { PhysicsObject } from "@/types";

const applyGravity = (obj: PhysicsObject): void => {
    obj.velocity.vy += PHYSICS.GRAVITY_M_S2 * PHYSICS.DT_S
}

const clampVelocity = (obj: PhysicsObject): void => {
    obj.velocity.vx = Math.min(Math.abs(obj.velocity.vx), PHYSICS.V_MAX_M_S) * Math.sign(obj.velocity.vx)
    obj.velocity.vy = Math.min(Math.abs(obj.velocity.vy), PHYSICS.V_MAX_M_S) * Math.sign(obj.velocity.vy)
}

const updatePosition = (obj: PhysicsObject): void => {
    obj.position.x += obj.velocity.vx * PHYSICS.DT_S;
    obj.position.y += obj.velocity.vy * PHYSICS.DT_S;
}

const checkBoundary = (obj: PhysicsObject): void => {

}
