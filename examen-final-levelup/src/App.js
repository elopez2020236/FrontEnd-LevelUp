import "./App.css";
import Formulario from "./components/Formulario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} exact />
      </Routes>
    </BrowserRouter>
  );
}
export default App;