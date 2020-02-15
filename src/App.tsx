import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="contenedor_gris">
      <div class="contenedor_blanco">
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
            <li class="menu_principal">
              <a href="https://institucional.us.es/cprevias/citaPrevia.php">
                Pedir Cita
              </a>
            </li>
            <li class="menu_principal">
              <a href="https://institucional.us.es/cprevias/misCitas.php">
                Mis Citas
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div class="contenedor_blanco">
        <p style="text-align:right;margin-bottom:-23px;">
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
          onsubmit="return validaFormCalendario();"
        >
          <fieldset id="fieldsetCitaPrevia" class="fieldsetCitaPrevia">
            <h1>1. Centro</h1>
            <label
              class="labelCitaPrevia2"
              style="margin-left:20px;width:400px;text-align:left;font-weight:bold;"
            >
              Escuela T�cnica Superior de Ingenier�a Inform�tica
            </label>
            <br /> <input type="hidden" name="paso" value="3" />
            <h1>2. Selecciona un Servicio</h1>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Otras solicitudes</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="116"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de otras solicitudes
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="119"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de devoluci�n
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="115"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n solicitud cambio Departamento Proyecto
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Ampliaci�n de matr�cula</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="112"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de ampliaci�n de matr�cula
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="113"
                  onclick="seleccionaServicio();"
                />
                Recogida carta de pago ampliaci�n matr�cula
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Pr�cticas en Empresas</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="100"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de pr�cticas
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Informaci�n </b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="90"
                  onclick="seleccionaServicio();"
                />
                Informaci�n general
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Reconocimientos de cr�ditos</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="92"
                  onclick="seleccionaServicio();"
                />
                Entrega de documentaci�n de reconocimiento de cr�ditos
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="96"
                  onclick="seleccionaServicio();"
                />
                Informaci�n sobre reconocimientos y adaptaciones
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="91"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de reconocimiento de cr�ditos
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Compulsas</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="97"
                  onclick="seleccionaServicio();"
                />
                Compulsa de documentos
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Traslados de expediente</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="99"
                  onclick="seleccionaServicio();"
                />
                Entrega de traslado de expediente
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="98"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de traslado de expediente
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>T�tulos</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="118"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de t�tulo
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="103"
                  onclick="seleccionaServicio();"
                />
                Recogida del resguardo de T�tulo
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="26"
                  onclick="seleccionaServicio();"
                />
                Recogida del t�tulo
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Matriculaci�n</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="138"
                  onclick="seleccionaServicio();"
                />
                Compulsa y revisi�n de matr�culas
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="95"
                  onclick="seleccionaServicio();"
                />
                Informaci�n sobre matr�cula
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="108"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de anulaci�n de matr�cula
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="110"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de cambio de grupo ingl�s
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="109"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de modificaci�n de matr�cula
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="111"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n de solicitud de permuta
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="107"
                  onclick="seleccionaServicio();"
                />
                Presentaci�n solicitud matr�cula Pr�cticas en Empresas
              </div>
            </div>
            <div id="contenedora" style="width:100%">
              <div class="capaTipoServicio" style="text-transform: uppercase;">
                <br />
                <b>Certificaciones</b>
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="7"
                  onclick="seleccionaServicio();"
                />
                Recogida de Certificaciones Acad�micas
              </div>
              <div class="capaServicio">
                <input
                  type="radio"
                  name="cs"
                  value="94"
                  onclick="seleccionaServicio();"
                />
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
            <div class="capaBotones">
              <p>
                <br />
                <br />
                (Recuerda que s�lo puedes pedir 1 Cita Previa para el mismo
                Centro - Servicio - D�a)
              </p>{" "}
              <input
                type="submit"
                class="boton"
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
        <p style="margin-top: 0px;">
          <b>
            Universidad de Sevilla. C/ S. Fernando, 4, C.P. 41004-Sevilla,
            Espa�a. Centralita exterior: 954551000 citapreviafefp@us.es
          </b>
          <span class="contacto">
            <a
              href="mailto:citapreviafefp@us.es"
              title="Enviar un email al Administrador de Cita Previa"
              style="text-decoration:none;color:#FFFFFF;margin-right:20px;margin-top:0px;"
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
