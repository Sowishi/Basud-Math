import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Unit1 from "./pages/unit1";
import Unit2 from "./pages/unit2";
import Unit3 from "./pages/unit3";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/unit-1" element={<Unit1 />} />
        <Route path="/unit-2" element={<Unit2 />} />
        <Route path="/unit-3" element={<Unit3 />} />
      </Routes>
    </>
  );
};

export default App;
