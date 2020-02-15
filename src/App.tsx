import React from "react";
import "./App.css";

function App() {
  return (
    <div className="contenedor_gris">
      <div className="contenedor_blanco">
        <a href="https://institucional.us.es/cprevias/index.php" title="inicio">
          <img
            src="./Cita Previa __ Gestión de Citas On-Line de la Universidad de Sevilla_files/cabecera-left.gif"
            alt="Cita Previa"
            id="cabecera-left"
          />
          <img
            src="./Cita Previa __ Gestión de Citas On-Line de la Universidad de Sevilla_files/cabecera-right.gif"
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
            title="Cerrar la sesión"
          >
            Cerrar sesión
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
              Escuela Tócnica Superior de Ingenieróa Informótica
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
                Presentación de otras solicitudes
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="119" />
                Presentación de solicitud de devolución
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="115" />
                Presentación solicitud cambio Departamento Proyecto
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Ampliación de matrócula</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="112" />
                Presentación de solicitud de ampliación de matrócula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="113" />
                Recogida carta de pago ampliación matrócula
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Prócticas en Empresas</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="100" />
                Presentación de solicitud de prócticas
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Información </b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="90" />
                Información general
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Reconocimientos de cróditos</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="92" />
                Entrega de documentación de reconocimiento de cróditos
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="96" />
                Información sobre reconocimientos y adaptaciones
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="91" />
                Presentación de solicitud de reconocimiento de cróditos
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
                Presentación de solicitud de traslado de expediente
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Tótulos</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="118" />
                Presentación de solicitud de tótulo
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="103" />
                Recogida del resguardo de Tótulo
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="26" />
                Recogida del tótulo
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Matriculación</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="138" />
                Compulsa y revisión de matróculas
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="95" />
                Información sobre matrócula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="108" />
                Presentación de solicitud de anulación de matrócula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="110" />
                Presentación de solicitud de cambio de grupo inglós
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="109" />
                Presentación de solicitud de modificación de matrócula
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="111" />
                Presentación de solicitud de permuta
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="107" />
                Presentación solicitud matrócula Prócticas en Empresas
              </div>
            </div>
            <div id="contenedora">
              <div className="capaTipoServicio">
                <br />
                <b>Certificaciones</b>
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="7" />
                Recogida de Certificaciones Acadómicas
              </div>
              <div className="capaServicio">
                <input type="radio" name="cs" value="94" />
                Solicitud de certificaciones acadómicas
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
                (Recuerda que sólo puedes pedir 1 Cita Previa para el mismo
                Centro - Servicio - Dóa)
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
            Espaóa. Centralita exterior: 954551000 citapreviafefp@us.es
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
