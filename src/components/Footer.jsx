import "./Footer.css";
import { NavLink } from "react-router-dom";

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
            src="/img/logo-tran.png"
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
                  src="/img/menu.png"
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
                  src="/img/origen.png"
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
                  src="/img/colmena.png"
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
                  src="/icons/icon-contacto.svg"
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