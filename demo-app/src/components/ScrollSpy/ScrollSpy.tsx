import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface ScrollSpyProps {
  children: ReactNode;
  navContainerRef: MutableRefObject<HTMLDivElement | null>;
}

const ScrollSpy = ({ children, navContainerRef }: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    let didScroll = false;
    window.onscroll = () => {
      didScroll = true;
    };
    setInterval(() => {
      if (didScroll) {
        setOffset(window.pageYOffset);
        countRef.current++;
      }
    }, 500);
  }, []);

  const isVisible = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const leniency = window.innerHeight * 0.5;
    console.log(rect.top + leniency, rect.bottom - leniency);
    console.log(0, window.innerHeight);
    return (
      rect.top + leniency >= 0 && rect.bottom - leniency <= window.innerHeight
    );
  };

  let useChildren = Array(children);

  useEffect(() => {
    const navContainerItems =
      navContainerRef.current?.querySelectorAll(".ss-item");
    const scrollDiv =
      scrollContainerRef.current?.querySelectorAll(".is-scroll-child");

    if (scrollDiv && navContainerItems) {
      scrollDiv.forEach((el) => {
        el.childNodes.forEach((child) => {
          const useChild = child as HTMLDivElement;
          console.log(useChild);

          // check if the element is in the viewport
          if (isVisible(useChild)) {
            // if so, get its ID
            const changeHighlightedItemId = useChild.id;
            console.log(changeHighlightedItemId);

            // now loop over each element in the nav Container
            navContainerItems.forEach((el) => {
              // remove the "active" class from all of them
              el.classList.remove("active-scroll-spy");
              const attrId = el.getAttribute("data-to-scrollspy-id");

              // and see if its ID matches the ID we got from the viewport
              if (attrId === changeHighlightedItemId) {
                el.classList.add("active-scroll-spy");
              }
            });
          }
        });
      });
    }
    return () => {};
  }, [navContainerRef, offset]);

  return (
    <div ref={scrollContainerRef}>
      <div style={{ position: "fixed" }}>{countRef.current}</div>
      {useChildren.map((child, i) => (
        <div className="is-scroll-child" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSpy;
