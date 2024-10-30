import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Unit1 from "./pages/unit1";
import Unit2 from "./pages/unit2";
import Unit3 from "./pages/unit3";
import Home from "./pages/home";
import About from "./pages/about";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/learn" element={<Landing />} />
        <Route path="/unit-1" element={<Unit1 />} />
        <Route path="/unit-2" element={<Unit2 />} />
        <Route path="/unit-3" element={<Unit3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
