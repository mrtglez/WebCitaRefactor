import React from 'react';
import '../App.css';

const WebHeader = (props: any) => {
  console.log(props);
  return (
    <div>
      <div className="contenedor_blanco">
        <a href="https://institucional.us.es/cprevias/index.php" title="inicio">
          <img
            src="https://institucional.us.es/cprevias/img/cabecera-left.gif"
            alt="Cita Previa"
            id="cabecera-left"
          />
          <img
            src="https://institucional.us.es/cprevias/img/cabecera-right.gif"
            alt="Cita Previa"
            id="cabecera-right"
          />
        </a>
        <div id="menu">
          <ul>
            <li className="menu_principal">
              <a href="https://institucional.us.es/cprevias/citaPrevia.php">Pedir Cita</a>
            </li>
            <li className="menu_principal">
              <a href="https://institucional.us.es/cprevias/misCitas.php">Mis Citas</a>
            </li>{' '}
          </ul>
        </div>
      </div>
      <div className="contenedor_blanco">
        <p className={props.classes.header}>
          <a href="https://institucional.us.es/cprevias/salir.php" title="Cerrar la sesión">
            Cerrar sesión
          </a>
          &nbsp;
        </p>{' '}
        <h1>MARTIN GONZALEZ LOPEZ </h1>
        <h4></h4>
        <h2>Solicitud de Cita Previa </h2>
      </div>
    </div>
  );
};

export default WebHeader;
