import "./App.css";
import Formulario from "./components/Formulario";
import Reporte from "./components/reporte";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Formulario />}  />
        <Route path="/reportes" element={<Reporte />}  />
      </Routes>
  );
}
export default App;