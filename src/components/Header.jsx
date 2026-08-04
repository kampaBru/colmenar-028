import "./Header.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      const menu = document.querySelector("#menu");
      const menuBtn = document.querySelector("#menu-btn");

      if (!menu || !menuBtn) return;

      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleMenuLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header-main">
      <div className="header-wrapper">
        <NavLink
          to="/"
          className="header-logo-link"
          aria-label="Ir al inicio"
          onClick={handleMenuLinkClick}
        >
          <img
            src="/img/logo-tran.png"
            alt="Colmenar 028"
            className="logo-header"
          />
        </NavLink>

        <button
          id="menu-btn"
          className="menu-toggle lg:hidden"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <img
            src="/icons/lucide_menu.svg"
            alt=""
            className="menu-icon"
          />
        </button>

        <nav
          id="menu"
          className={`nav-main ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                onClick={handleMenuLinkClick}
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/origen"
                onClick={handleMenuLinkClick}
              >
                Origen
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/coleccion"
                onClick={handleMenuLinkClick}
              >
                Colección
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacto"
                onClick={handleMenuLinkClick}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;