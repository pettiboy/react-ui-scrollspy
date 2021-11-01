export const throttle = (callback: () => void, limit: number) => {
  var tick = false;

  return () => {
    if (!tick) {
      callback();
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit);
    }
  };
};
