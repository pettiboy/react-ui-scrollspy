import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface ScrollSpyProps {
  children: ReactNode;
  navContainerRef?: MutableRefObject<HTMLDivElement | null>;
}

const ScrollSpy = ({ children, navContainerRef }: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [navContainerItems, setNavContainerItems] = useState<
    NodeListOf<Element> | undefined
  >();

  const countRef = useRef(0);

  useEffect(() => {
    if (navContainerRef) {
      setNavContainerItems(
        navContainerRef.current?.querySelectorAll("[data-to-scrollspy-id]")
      );
    } else {
      setNavContainerItems(document.querySelectorAll("[data-to-scrollspy-id]"));
    }
  }, [navContainerRef]);

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

  useEffect(() => {
    const scrollParentContainer = scrollContainerRef.current;
    // if there are no children, return
    if (!(scrollParentContainer && navContainerItems)) return;

    for (let i = 0; i < scrollParentContainer.children.length; i++) {
      const child = scrollParentContainer.children.item(i);
      if (!child) continue;

      const useChild = child as HTMLDivElement;

      // check if the element is in the viewport
      if (isVisible(useChild)) {
        // if so, get its ID
        const changeHighlightedItemId = useChild.id;

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
    }
    return () => {};
  }, [navContainerItems, offset]);

  return (
    <>
      <div style={{ position: "fixed" }}>{countRef.current}</div>
      <div ref={scrollContainerRef}>{children}</div>
    </>
  );
};

export default ScrollSpy;
