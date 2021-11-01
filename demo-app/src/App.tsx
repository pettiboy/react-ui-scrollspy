import React, { useRef } from "react";
import Center from "./components/Center/Center";
import ScrollSpy from "./components/ScrollSpy/ScrollSpy";

function App() {
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <div ref={navContainerRef}>
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
      <ScrollSpy>
        <Center id="orange" backgroundColor={"orange"}>
          <h1>Hello World</h1>
        </Center>
        <Center id="blue" backgroundColor={"blue"}>
          <h1>Hello World</h1>
        </Center>
        <Center id="green" backgroundColor={"green"}>
          <h1>Hello World</h1>
        </Center>
      </ScrollSpy>
    </div>
  );
}

export default App;
