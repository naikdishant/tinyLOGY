export function startAppLoop({ state, onFrame }) {
  let stopped = false;

  function tick(now) {
    if (stopped) return;
    state.runtime.frame += 1;
    state.runtime.lastTickAt = now;
    onFrame?.(now);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  return () => {
    stopped = true;
  };
}
