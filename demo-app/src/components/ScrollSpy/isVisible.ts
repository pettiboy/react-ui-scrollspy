// to check if the element is in viewport
export const isVisible = (el: HTMLElement) => {
  const rectInView = el.getBoundingClientRect();

  // this decides how much of the element should be visible
  const leniency = window.innerHeight * 0.5;

  return (
    rectInView.top + leniency >= 0 &&
    rectInView.bottom - leniency <= window.innerHeight
  );
};
