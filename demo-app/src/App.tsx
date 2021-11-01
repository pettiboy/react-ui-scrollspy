import React, { useRef } from "react";
import Center from "./components/Center/Center";
import Navigation from "./components/Navigation/Navigation";
import ScrollSpy from "./components/ScrollSpy/ScrollSpy";

function App() {
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div style={{}}>
      <Navigation />

      <div style={{}}>
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
    </div>
  );
}

export default App;
