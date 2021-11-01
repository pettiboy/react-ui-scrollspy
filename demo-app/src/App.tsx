import React from "react";
import Center from "./components/Center/Center";
import ScrollSpy from "./components/ScrollSpy/ScrollSpy";

function App() {
  return (
    <div>
      <ScrollSpy>
        <Center backgroundColor={"orange"}>
          <h1>Hello World</h1>
        </Center>
        <Center backgroundColor={"blue"}>
          <h1>Hello World</h1>
        </Center>
        <Center backgroundColor={"green"}>
          <h1>Hello World</h1>
        </Center>
      </ScrollSpy>
    </div>
  );
}

export default App;
