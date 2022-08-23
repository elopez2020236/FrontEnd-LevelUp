import "./App.css";
import Formulario from "./components/Formulario";
import Reporte from "./components/reporte";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />}  />
        <Route path="/reportes" element={<Reporte />}  />

      </Routes>
    </BrowserRouter>
  );
}
export default App;