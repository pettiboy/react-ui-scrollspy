import React from "react";

interface Props {}

const Navigation = (props: Props) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <a onClick={(e) => onPress(e)} href="#orange">
          <div data-to-scrollspy-id="orange" className={"ss-item"}>
            orange
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#brown">
          <div data-to-scrollspy-id="brown" className={"ss-item"}>
            brown
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#blue">
          <div data-to-scrollspy-id="blue" className={"ss-item"}>
            blue
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#green">
          <div data-to-scrollspy-id="green" className={"ss-item"}>
            green
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
