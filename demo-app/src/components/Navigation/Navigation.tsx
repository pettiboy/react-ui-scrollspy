import React from "react";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "beige",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="#orange">
          <div data-to-scrollspy-id="orange" className={"ss-item"}>
            orange
          </div>
        </a>
        <a href="#brown">
          <div data-to-scrollspy-id="brown" className={"ss-item"}>
            brown
          </div>
        </a>
        <a href="#blue">
          <div data-to-scrollspy-id="blue" className={"ss-item"}>
            blue
          </div>
        </a>
        <a href="#green">
          <div data-to-scrollspy-id="green" className={"ss-item"}>
            green
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
