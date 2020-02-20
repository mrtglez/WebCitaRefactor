import React from 'react';
import '../App.css';

function WebFooter() {
  return (
    <div>
      <div id="contenedor_pie">
        <p>
          <b>
            Universidad de Sevilla. C/ S. Fernando, 4, C.P. 41004-Sevilla, España. Centralita
            exterior: 954551000 citapreviafefp@us.es
          </b>
          <span className="contacto">
            <a
              href="mailto:citapreviafefp@us.es"
              title="Enviar un email al Administrador de Cita Previa"
            >
              Contacto
            </a>
          </span>
        </p>
      </div>
      <p id="creditos">
        Desarrollado por <a href="http://www.aljamir.es/">Aljamir S.L.</a>
      </p>
    </div>
  );
}

export default WebFooter;
