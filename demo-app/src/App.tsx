import Center from "./components/Center/Center";
import Navigation from "./components/Navigation/Navigation";
import ScrollSpy from "react-ui-scrollspy";
import ScrollSpyDev from "./components/src";

function App() {
  return (
    <div>
      <Navigation />

      <ScrollSpyDev scrollThrottle={100}>
        <Center id="orange" backgroundColor={"orange"}>
          <h1>Orange</h1>
        </Center>
        <Center id="brown" backgroundColor={"brown"}>
          <h1>Brown</h1>
        </Center>
        <Center id="blue" backgroundColor={"blue"}>
          <h1>Blue</h1>
        </Center>
        <Center id="green" backgroundColor={"green"}>
          <h1>Green</h1>
        </Center>
      </ScrollSpyDev>
    </div>
  );
}

export default App;
