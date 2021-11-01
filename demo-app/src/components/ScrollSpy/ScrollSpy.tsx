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
  scrollThrottle?: number;
}

const ScrollSpy = ({
  children,
  navContainerRef,
  scrollThrottle = 500,
}: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [navContainerItems, setNavContainerItems] = useState<
    NodeListOf<Element> | undefined
  >();

  // To get the nav container items depending on whether the parent ref for the nav container is passed or not
  useEffect(() => {
    if (navContainerRef) {
      setNavContainerItems(
        navContainerRef.current?.querySelectorAll("[data-to-scrollspy-id]")
      );
    } else {
      setNavContainerItems(document.querySelectorAll("[data-to-scrollspy-id]"));
    }
  }, [navContainerRef]);

  // To get the offset of the scroll container
  useEffect(() => {
    let didScroll = false;
    window.onscroll = () => {
      didScroll = true;
    };

    setInterval(() => {
      if (didScroll) {
        checkAndUpdateActiveScrollSpy();
      }
    }, scrollThrottle);
  }, [window.onscroll]);

  useEffect(() => {
    checkAndUpdateActiveScrollSpy();
  }, [navContainerItems]);

  const checkAndUpdateActiveScrollSpy = () => {
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
  };

  // to check if the element is in viewport
  const isVisible = (el: HTMLElement) => {
    const rectInView = el.getBoundingClientRect();

    // this decides how much of the element should be visible
    const leniency = window.innerHeight * 0.5;

    return (
      rectInView.top + leniency >= 0 &&
      rectInView.bottom - leniency <= window.innerHeight
    );
  };

  return <div ref={scrollContainerRef}>{children}</div>;
};

export default ScrollSpy;
