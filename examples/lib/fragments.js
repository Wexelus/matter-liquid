import * as Util from './utils.js';

export function init() {
  // create engine
  const engine = Matter.Engine.create();
  const { world } = engine;

  // create renderer
  const render = Matter.Render.create({
    element: document.body,
    engine,
    options: {
      width: document.documentElement.clientWidth * 0.9,
      height: document.documentElement.clientHeight * 0.9,
      wireframes: false,
    },
  });
  Matter.Render.run(render);

  // create runner
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  return {
    engine,
    world,
    render,
    runner,
  }
}

export function setWorldSize(world, width, height = width) {
  world.bounds.min.x = -width / 2;
  world.bounds.min.y = -height / 2;
  world.bounds.max.x = width / 2;
  world.bounds.max.y = height / 2;
}

export function setWorldBackground(world, color) {
  const background = Matter.Bodies.rectangle(0, 0, world.bounds.max.x - world.bounds.min.x, world.bounds.max.y - world.bounds.min.y, {
    isStatic: true,
    render: {
      fillStyle: color,
    }
  });
  Matter.World.add(world, background);
}

export function cameraLookAt(render, bounds, padding = 50) {
  Matter.Render.lookAt(render, {
    min: { x: bounds.min.x - padding, y: bounds.min.y - padding },
    max: { x: bounds.max.x + padding, y: bounds.max.y + padding },
  });
}

export function initMouse(render) {
  const mouse = Matter.Mouse.create(render.canvas);
  const mouseConstraint = Matter.MouseConstraint.create(render.engine, {
    mouse,
    constraint: {
      render: { visible: false },
    },
  });
  Matter.World.add(render.engine.world, mouseConstraint);
  render.mouse = mouse; // keep the mouse in sync with rendering

  return {
    mouse,
    mouseConstraint,
  };
}

export function setDripper(render, liquid, mouseConstraint) {
  const liquidCyanId = 0;
  const radius = 100;
  Util.onpressedPointer(render.canvas, (event, isMainButton) => {
    let point = mouseConstraint.mouse.position;
    const x = point.x - radius, y = point.y - radius;
    if (isMainButton) {
      liquid.fillZoneByLiquid(x, y, radius * 2, radius * 2, liquidCyanId);
    } else {
      liquid.clearZoneByLiquid(x, y, radius * 2, radius * 2, liquidCyanId);
    }
  }, 50);
}

export function getWorldParams(world) {
  const worldBounds = world.bounds;
  const minX = worldBounds.min.x;
  const maxX = worldBounds.max.x;
  const minY = worldBounds.min.y;
  const maxY = worldBounds.max.y;
  return {
    minX,
    maxX,
    minY,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}