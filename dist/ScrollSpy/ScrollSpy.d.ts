import { MutableRefObject, ReactNode } from "react";
interface ScrollSpyProps {
    children: ReactNode;
    navContainerRef?: MutableRefObject<HTMLDivElement | null>;
    parentScrollContainerRef?: MutableRefObject<HTMLDivElement | null>;
    scrollThrottle?: number;
    onUpdateCallback?: (id: string) => void;
    offsetTop?: number;
    offsetBottom?: number;
    useDataAttribute?: string;
    activeClass?: string;
}
declare const ScrollSpy: ({ children, navContainerRef, parentScrollContainerRef, scrollThrottle, onUpdateCallback, offsetTop, offsetBottom, useDataAttribute, activeClass, }: ScrollSpyProps) => JSX.Element;
export default ScrollSpy;
