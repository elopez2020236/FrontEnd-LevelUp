import  React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import "../estilos/reporte.css";

function ReporteGeneral() {
    const [reporte, setDatos] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:3000/api/generarReporte')
      .then(res => setDatos(res.data.Formulario))
    }, [])

  return (
    <>
    <Navbar />
    <section className="contenedor">
      <h4 className="reportes">REPORTES</h4>
      <div className="tabla">
      <table className="table">

      <thead>
        <tr>
          <th class="modelo">Carnet</th>
          <th class="fecha">nombre</th>
          <th class="responsable">Direccion</th>
          <th class="proveedor">Genero</th>
          <th class="modelo">Telefono</th>
          <th class="fecha">Nacimiento</th>
          <th class="responsable">Carrera</th>
          <th class="proveedor">Genero De Poesia</th>
          <th class="proveedor">Inscripcion</th>
        </tr>
      </thead>

        {reporte.map((datos)=> {
            return (
            
            
            
            <tbody key={datos._id}>
                <tr>
                  <td>{datos.carnet}</td>
                  <td>{datos.nombre}</td>
                  <td>{datos.direccion}</td>
                  <td>{datos.genero}</td>
                  <td>{datos.telefono}</td>
                  <td>{datos.fechaNacimiento}</td>
                  <td>{datos.carrera}</td>
                  <td>{datos.generoPoesia}</td>
                  <td>{datos.fechaInscripcion}</td>
                </tr>
              </tbody>)
        })}
      </table>
      </div>
    </section>
  </>
);
}

export default ReporteGeneral;
