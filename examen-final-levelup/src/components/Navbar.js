import React from "react";
import { Link } from "react-router-dom";
import "../estilos/NavbarStyle.css";

const Navbar = () => {
  return (

    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          Edwar
        </div>
      </div>
      <div className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Formulario
              </Link>
            </li>
            <li className="nav-item2">
              <Link className="nav-link" to="/reportes/">
                Reportes
              </Link>
            </li>
      </div>
    </div>
  );


};

export default Navbar;