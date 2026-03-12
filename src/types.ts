export type PhysicsObject = {
    char: string,
    position: { x: number, y: number },
    velocity: { vx: number, vy: number },
    mass: number,
    restitution: number,
    isStatic: boolean
}
export type Cell = PhysicsObject | null;
export type Objects = PhysicsObject[];
export type Grid = Cell[][];
