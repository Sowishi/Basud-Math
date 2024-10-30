import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Unit1 from "./pages/unit1";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/unit-1" element={<Unit1 />} />
      </Routes>
    </>
  );
};

export default App;
