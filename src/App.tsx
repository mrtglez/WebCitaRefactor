import React from "react";
import "./App.css";

function App() {
  return (
    <div className="contenedor_gris">
      <div className="contenedor_blanco">
        <a href="https://institucional.us.es/cprevias/index.php" title="inicio">
          <img
            src="./Cita Previa __ Gesti�n de Citas On-Line de la Universidad de Sevilla_files/cabecera-left.gif"
            alt="Cita Previa"
            id="cabecera-left"
          />
          <img
            src="./Cita Previa __ Gesti�n de Citas On-Line de la Universidad de Sevilla_files/cabecera-right.gif"
            alt="Cita Previa"
            id="cabecera-right"
          />
        </a>
        <div id="menu">
          <ul>
            <li className="menu_principal">
              <a href="https://institucional.us.es/cprevias/citaPrevia.php">
                Pedir Cita
              </a>
            </li>
            <li className="menu_principal">
              <a href="https://institucional.us.es/cprevias/misCitas.php">
                Mis Citas
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="contenedor_blanco">
        <p>
          {/* ///style="text-align:right;margin-bottom:-23px;" */}
          <a
            href="https://institucional.us.es/cprevias/salir.php"
            title="Cerrar la sesi�n"
          >
            Cerrar sesi�n
          </a>
          &nbsp;
        </p>{" "}
        <h1>MARTIN GONZALEZ LOPEZ </h1>
        <h4></h4>
        <h2>Solicitud de Cita Previa </h2>
        <form
          name="frmCitaPrevia"
          id="frmCitaPrevia"
          action="https://institucional.us.es/cprevias/citaPrevia.php"
          method="POST"
        >
          <fieldset id="fieldsetCitaPrevia" className="fieldsetCitaPrevia">
            <h1>1. Centro</h1>
            <label className="labelCitaPrevia2">
              Escuela T�cnica Superior de Ingenier�a Inform�tica
            </label>
            <br /> <input type="hidden" name="paso" value="3" />
            <h1>2. Selecciona un Servicio</h1>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Otras solicitudes</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="116" />
                Presentaci�n de otras solicitudes
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="119" />
                Presentaci�n de solicitud de devoluci�n
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="115" />
                Presentaci�n solicitud cambio Departamento Proyecto
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Ampliaci�n de matr�cula</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="112" />
                Presentaci�n de solicitud de ampliaci�n de matr�cula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="113" />
                Recogida carta de pago ampliaci�n matr�cula
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Pr�cticas en Empresas</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="100" />
                Presentaci�n de solicitud de pr�cticas
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Informaci�n </b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="90" />
                Informaci�n general
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Reconocimientos de cr�ditos</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="92" />
                Entrega de documentaci�n de reconocimiento de cr�ditos
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="96" />
                Informaci�n sobre reconocimientos y adaptaciones
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="91" />
                Presentaci�n de solicitud de reconocimiento de cr�ditos
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Compulsas</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="97" />
                Compulsa de documentos
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Traslados de expediente</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="99" />
                Entrega de traslado de expediente
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="98" />
                Presentaci�n de solicitud de traslado de expediente
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>T�tulos</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="118" />
                Presentaci�n de solicitud de t�tulo
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="103" />
                Recogida del resguardo de T�tulo
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="26" />
                Recogida del t�tulo
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Matriculaci�n</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="138" />
                Compulsa y revisi�n de matr�culas
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="95" />
                Informaci�n sobre matr�cula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="108" />
                Presentaci�n de solicitud de anulaci�n de matr�cula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="110" />
                Presentaci�n de solicitud de cambio de grupo ingl�s
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="109" />
                Presentaci�n de solicitud de modificaci�n de matr�cula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="111" />
                Presentaci�n de solicitud de permuta
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="107" />
                Presentaci�n solicitud matr�cula Pr�cticas en Empresas
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Certificaciones</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="7" />
                Recogida de Certificaciones Acad�micas
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="94" />
                Solicitud de certificaciones acad�micas
              </div>
            </div>
            <input
              type="hidden"
              name="servicioSeleccionado"
              id="servicioSeleccionado"
              value=""
            />
            <br />
            &nbsp;
            <br />
            <div className="capaBotones">
              <p>
                <br />
                <br />
                (Recuerda que s�lo puedes pedir 1 Cita Previa para el mismo
                Centro - Servicio - D�a)
              </p>{" "}
              <input
                type="submit"
                className="boton"
                value="Siguiente paso"
                name="siguiente"
              />
            </div>
          </fieldset>
        </form>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="contenedor_pie">
        <p>
          <b>
            Universidad de Sevilla. C/ S. Fernando, 4, C.P. 41004-Sevilla,
            Espa�a. Centralita exterior: 954551000 citapreviafefp@us.es
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
        Desarrollado por{" "}
        <a target="_blank" href="http://www.aljamir.es/">
          Aljamir S.L.
        </a>
      </p>
    </div>
  );
}

export default App;
