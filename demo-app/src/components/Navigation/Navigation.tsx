import React from "react";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <div>
      <div style={{ position: "fixed" }}>
        <div data-to-scrollspy-id="orange" className={"ss-item"}>
          orange
        </div>
        <div data-to-scrollspy-id="blue" className={"ss-item"}>
          blue
        </div>
        <div data-to-scrollspy-id="green" className={"ss-item"}>
          green
        </div>
      </div>
    </div>
  );
};

export default Navigation;
