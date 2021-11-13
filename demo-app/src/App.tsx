import { Routes, Route, BrowserRouter } from "react-router-dom";
import Buttons from "./components/Buttons/Buttons";
import DummyNav from "./components/NavBar/NavBar";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";

function App() {
  return (
    <BrowserRouter>
      <DummyNav />

      <Routes>
        <Route path="/" element={<Demo1 />} />
        <Route path="demo-2" element={<Demo2 />} />
      </Routes>
      <Buttons />
    </BrowserRouter>
  );
}

export default App;
