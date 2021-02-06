type TState = {
  w: Matter.World,
  g: [number, number],
  h: number,
}

export const State: TState = {
  w: null,
  g: [0, 0.01],
  h: 30,
};

export function setWorld(world: Matter.World) {
  State.w = world;
}
export function setGravity(vertical: number, horizontal: number) {
  const divider = 10;
  State.g = [horizontal / divider, vertical / divider];
}
export function setInteractionRadius(value: number) {
  State.h = value;
}