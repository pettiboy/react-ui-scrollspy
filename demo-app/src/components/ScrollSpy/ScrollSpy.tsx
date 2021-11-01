import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

interface ScrollSpyProps {
  children: ReactNode;
  navContainerRef: MutableRefObject<HTMLDivElement | null>;
}

const ScrollSpy = ({ children, navContainerRef }: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const isVisible = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    console.log(rect.top + 100, rect.bottom - 100);
    console.log(0, window.innerHeight);
    return rect.top + 100 >= 0 && rect.bottom - 100 <= window.innerHeight;
  };

  let useChildren = Array(children);

  useEffect(() => {
    const allItems = navContainerRef.current?.querySelectorAll(".ss-item");

    const scrollDiv =
      scrollContainerRef.current?.querySelectorAll(".is-scroll-child");

    if (scrollDiv) {
      scrollDiv.forEach((el) => {
        el.childNodes.forEach((child) => {
          const useChild = child as HTMLDivElement;
          console.log(useChild);
          if (isVisible(useChild)) {
            const changeHighlightedItemId = useChild.id;
            console.log(changeHighlightedItemId);

            if (allItems) {
              allItems.forEach((el) => {
                el.classList.remove("active-scroll-spy");
                const attrId = el.getAttribute("data-to-scrollspy-id");
                if (attrId === changeHighlightedItemId) {
                  el.classList.add("active-scroll-spy");
                }
              });
            }
          }
        });
      });
    }
    return () => {};
  }, [navContainerRef]);

  return (
    <div ref={scrollContainerRef}>
      {useChildren.map((child, i) => (
        <div className="is-scroll-child" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSpy;
