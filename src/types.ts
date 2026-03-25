import z from "zod";

const PhysicsObjectSchema = z.object({
    char: z.string(),
    position: z.object({ x: z.number(), y: z.number() }),
    velocity: z.object({ vx: z.number(), vy: z.number() }),
    mass: z.number(),
    restitution: z.number(),
    friction: z.number(),
    isStatic: z.boolean(),
});
export type PhysicsObject = z.infer<typeof PhysicsObjectSchema>

const PartialPhysicsObjectSchema = PhysicsObjectSchema.partial().required({
    char: true,
});

const textAlign = ["left", "center", "right"] as const;

export const PhysicsObjectConfigSchema = z.object({
    default: PhysicsObjectSchema.omit({ char: true }).extend({
        textAlign: z.enum(textAlign),
    }).partial().optional(),
    objects: z.array(PartialPhysicsObjectSchema),
});
export type PhysicsObjectConfig = z.infer<typeof PhysicsObjectConfigSchema>;

export type Cell = PhysicsObject | null;
export type Objects = PhysicsObject[];
export type Grid = Cell[][];
