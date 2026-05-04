import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import HobbyDetail from "./pages/HobbyDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/period/:periodId" element={<Detail />} />
      <Route path="/hobby/:hobbyId" element={<HobbyDetail />} />
    </Routes>
  );
}
