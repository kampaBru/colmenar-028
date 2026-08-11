import "./Footer.css";
import { NavLink } from "react-router-dom";
import logoHeader from "../assets/img/header/logo-tran.png";
import iconInicio from "../assets/img/footer/menu.png";
import iconOrigen from "../assets/img/footer/origen.png";
import iconColeccion from "../assets/img/footer/colmena.png";
import iconContacto from "../assets/icons/icon-contacto.svg";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Logo */}
        <NavLink
          to="/"
          className="footer-logo-link"
          aria-label="Ir al inicio"
        >
          <img
            src={logoHeader}
            alt="Colmenar 028"
            className="footer-logo"
          />
        </NavLink>

        {/* Navegación móvil y tablet */}
        <nav
          className="footer-nav-mobile"
          aria-label="Navegación inferior"
        >
          <ul className="nav-footer">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "is-active" : ""
                }
              >
                <img
                  src={iconInicio}
                  alt=""
                />
                <span>Inicio</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/origen"
                className={({ isActive }) =>
                  isActive ? "is-active" : ""
                }
              >
                <img
                  src={iconOrigen}
                  alt=""
                />
                <span>Origen</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/coleccion"
                className={({ isActive }) =>
                  isActive ? "is-active" : ""
                }
              >
                <img
                  src={iconColeccion}
                  alt=""
                />
                <span>Colección</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? "is-active" : ""
                }
              >
                <img
                  src={iconContacto}
                  alt=""
                />
                <span>Contacto</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Navegación desktop */}
        <nav
          className="footer-nav-desktop"
          aria-label="Navegación del pie de página"
        >
          <ul className="footer-desktop-list">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>

            <li>
              <NavLink to="/origen">Origen</NavLink>
            </li>

            <li>
              <NavLink to="/coleccion">Colección</NavLink>
            </li>

            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>

        {/* Información legal */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Colmenar 028. Todos los derechos reservados.
          </p>

          <ul
            className="footer-legal"
            aria-label="Información legal"
          >
            <li>
              <span>Aviso legal</span>
            </li>

            <li>
              <span>Privacidad</span>
            </li>

            <li>
              <span>Cookies</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;