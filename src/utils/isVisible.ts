// to check if the element is in viewport
export const isVisible = (
  el: HTMLElement,
  offsetTop: number,
  offsetBottom: number,
  scrollableComponentRef?: HTMLDivElement | null
) => {
  const rectInView = el.getBoundingClientRect();

  // this decides how much of the element should be visible
  const leniency = scrollableComponentRef
    ? scrollableComponentRef.offsetHeight * 0.5
    : window.innerHeight * 0.5;

  const useHeight = scrollableComponentRef
    ? scrollableComponentRef.offsetHeight
    : window.innerHeight;

  return (
    rectInView.top + leniency + offsetTop >= 0 &&
    rectInView.bottom - leniency - offsetBottom <= useHeight
  );
};
