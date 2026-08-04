import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/img/portada-desdtop.webp"
          />

          <img
            src="/img/abejas-olivo.webp"
            alt="Colmenas en un entorno natural y un enjambre de abejas sobre un olivo"
            className="hero-image"
          />
        </picture>

        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Guardianes de la biodiversidad
            </h1>

            <p className="hero-description">
              Apicultura sostenible, polinización y respeto por el entorno natural.
            </p>

            <div className="hero-actions">
              <Link
                to="/origen"
                className="btn-primary"
              >
                Origen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;