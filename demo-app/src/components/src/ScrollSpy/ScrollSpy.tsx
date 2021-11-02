import * as React from "react";
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { isVisible } from "../utils/isVisible";
import { throttle } from "../utils/throttle";

interface ScrollSpyProps {
  children: ReactNode;
  navContainerRef?: MutableRefObject<HTMLDivElement | null>;
  scrollThrottle?: number;
  onUpdateCallback?: (id: string) => void;
}

const ScrollSpy = ({
  children,
  navContainerRef,
  onUpdateCallback,
  scrollThrottle = 300,
}: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [navContainerItems, setNavContainerItems] = useState<NodeListOf<Element> | undefined>(); // prettier-ignore

  // keeps track of the Id in navcontainer which is active
  // so as to not update classLists unless it has been updated
  const prevIdTracker = useRef("");

  // To get the nav container items depending on whether the parent ref for the nav container is passed or not
  useEffect(() => {
    if (navContainerRef) {
      setNavContainerItems(
        navContainerRef.current?.querySelectorAll("[data-to-scrollspy-id]")
      );
    } else {
      setNavContainerItems(document.querySelectorAll("[data-to-scrollspy-id]"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navContainerRef]);

  // fire once after nav container items are set
  useEffect(() => {
    checkAndUpdateActiveScrollSpy();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navContainerItems]);

  const checkAndUpdateActiveScrollSpy = () => {
    const scrollParentContainer = scrollContainerRef.current;

    // if there are no children, return
    if (!(scrollParentContainer && navContainerItems)) return;

    // loop over all children in scroll container
    for (let i = 0; i < scrollParentContainer.children.length; i++) {
      // get child element
      const child = scrollParentContainer.children.item(i);
      if (!child) continue;
      const useChild = child as HTMLDivElement;

      // check if the element is in the viewport
      if (isVisible(useChild)) {
        // if so, get its ID
        const changeHighlightedItemId = useChild.id;

        // if the element was same as the one currently active ignore it
        if (prevIdTracker.current === changeHighlightedItemId) return;

        // now loop over each element in the nav Container
        navContainerItems.forEach((el) => {
          const attrId = el.getAttribute("data-to-scrollspy-id");

          // if the element contains 'active' the class remove it
          if (el.classList.contains("active-scroll-spy")) {
            el.classList.remove("active-scroll-spy");
          }

          // check if its ID matches the ID we got from the viewport
          // also make sure it does not already contain the 'active' class
          if (
            attrId === changeHighlightedItemId &&
            !el.classList.contains("active-scroll-spy")
          ) {
            el.classList.add("active-scroll-spy");

            if (onUpdateCallback) {
              onUpdateCallback(changeHighlightedItemId);
            }

            prevIdTracker.current = changeHighlightedItemId;
            window.history.pushState({}, "", `#${changeHighlightedItemId}`);
          }
        });
        break;
      }
    }
  };

  window.addEventListener(
    "scroll",
    throttle(checkAndUpdateActiveScrollSpy, scrollThrottle)
  );

  return <div ref={scrollContainerRef}>{children}</div>;
};

export default ScrollSpy;
