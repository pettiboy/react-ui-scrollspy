import React from "react";

interface ScrollSpyProps {
  children: React.ReactNode;
}

const ScrollSpy = ({ children }: ScrollSpyProps) => {
  return <div>{children}</div>;
};

export default ScrollSpy;
