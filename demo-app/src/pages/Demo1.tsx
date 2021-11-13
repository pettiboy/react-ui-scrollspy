import Center from "../components/Center/Center";
import Navigation from "../components/Demo1/Navigation";
import ScrollSpy from "../components/src";

interface Props {}

const Demo1 = (props: Props) => {
  return (
    <>
      <Navigation />
      <ScrollSpy scrollThrottle={100}>
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
      </ScrollSpy>
    </>
  );
};

export default Demo1;
