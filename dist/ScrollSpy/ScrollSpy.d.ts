import { MutableRefObject, ReactNode } from "react";
interface ScrollSpyProps {
    children: ReactNode;
    navContainerRef?: MutableRefObject<HTMLDivElement | null>;
    scrollThrottle?: number;
}
declare const ScrollSpy: ({ children, navContainerRef, scrollThrottle, }: ScrollSpyProps) => JSX.Element;
export default ScrollSpy;
