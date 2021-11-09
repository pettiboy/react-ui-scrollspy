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
    useBoxMethod?: boolean;
}
declare const ScrollSpy: ({ children, navContainerRef, parentScrollContainerRef, scrollThrottle, onUpdateCallback, offsetTop, offsetBottom, useDataAttribute, activeClass, useBoxMethod, }: ScrollSpyProps) => JSX.Element;
export default ScrollSpy;
