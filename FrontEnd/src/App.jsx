import { Routes, Route } from "react-router-dom";
import AllFood from "./pages/AllFood";
import CreateFood from "./pages/CreateFood";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex justify-between items-start min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllFood />} />
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/edit-food/:id" element={<CreateFood />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
