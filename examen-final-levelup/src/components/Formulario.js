import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CrearFormulario = () => {
    const [carnet, setCarnet] = useState("");
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [genero, setGenero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [carrera, setCarrera] = useState("");
    const [generarPoesia, setGenerarPoesia] = useState("");
    const [fechaInscripcion, setFechaInscripcion] = useState("");

    var navigate = useNavigate();


    function formulario() {
        var datos = {
            carnet: carnet,
            nombre: nombre,
            direccion: direccion,
            genero: genero,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento,
            carrera: carrera,
            generarPoesia: generarPoesia,
            fechaInscripcion: fechaInscripcion,
        }

        axios
            .post("http://localhost:3000/api/generarFormulario/", datos)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "Nice",
                });
            })
            .then(navigate("/"))
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: error.response.data.Error,
                });
            });
    }

    return (
        <>
      <Navbar />{" "}
        <div class="vid-container">
            <div class="inner-container">
                <div class="box">
                    <h1>Rellenar Formulario</h1>

                    <input
                        type="carnet"
                        name="carnet"
                        value={carnet}
                        onChange={(n) => { setCarnet(n.target.value); }}
                        required
                        placeholder="Ingresar Carnet"
                    />

                    <input
                        type="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(n) => { setNombre(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu Nombre Completo"
                    />

                    <input
                        type="direccion"
                        name="direccion"
                        value={direccion}
                        onChange={(n) => { setDireccion(n.target.value); }}
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu Direccion"
                        required
                    />

                    <input
                        type="genero"
                        name="genero"
                        value={genero}
                        onChange={(n) => { setGenero(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu Genero"
                    />

                    <input
                        type="telefono"
                        name="telefono"
                        value={telefono}
                        onChange={(n) => { setTelefono(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu telefono"
                    />

                    <input
                        type="fechaNacimiento"
                        name="fechaNacimiento"
                        value={fechaNacimiento}
                        onChange={(n) => { setFechaNacimiento(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu fechaNacimiento"
                    />

                    <input
                        type="carrera"
                        name="carrera"
                        value={carrera}
                        onChange={(n) => { setCarrera(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu carrera"
                    />

                    <input
                        type="generarPoesia"
                        name="generarPoesia"
                        value={generarPoesia}
                        onChange={(n) => { setGenerarPoesia(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu Genero de Poesia"
                    />

                    <input
                        type="fechaInscripcion"
                        name="fechaInscripcion"
                        value={fechaInscripcion}
                        onChange={(n) => { setFechaInscripcion(n.target.value); }}
                        required
                        was-validated="true"
                        className="form-control form-control-lg"
                        placeholder="Ingresa tu Fecha de Inscripcion"
                    />


                    <button onClick={formulario}>
                        Guardar datos
                    </button>
                </div>
            </div>
        </div>
        </>

    );
}

export default CrearFormulario;
