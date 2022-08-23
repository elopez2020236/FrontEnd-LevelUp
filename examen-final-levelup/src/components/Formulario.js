import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import "../estilos/Formulario.css";

const CrearFormulario = () => {    localStorage.clear();
    const [carnet, setCarnet] = useState("");
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [genero, setGenero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [carrera, setCarrera] = useState("");
    const [generoPoesia, setGeneroPoesia] = useState("");

    function formulario() {
        var parametros = {
            carnet: carnet,
            nombre: nombre,
            direccion: direccion,
            genero: genero,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento,
            carrera: carrera,
            generoPoesia: generoPoesia,
        }

        axios
            .post("http://localhost:3000/api/generarFormulario", parametros)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    text: "Su fecha de Declamacion Es",
                    title: res.data.Formulario.fechaDeclamacion
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    text: "Error" ,
                    title: error.response.data.mensaje,
                });
            });
    }

    return (
        <>
            <Navbar />
            <div className="vid-container">
                <div className="inner-container">
                    <div className="box">
                        <h1>Formulario</h1>

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
                            type="date"
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
                            value={generoPoesia}
                            onChange={(n) => { setGeneroPoesia(n.target.value); }}
                            required
                            was-validated="true"
                            className="form-control form-control-lg"
                            placeholder="Ingresa tu Genero de Poesia"
                        />

                        <button type="sumit" onClick={formulario}>
                            Guardar datos
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CrearFormulario;
