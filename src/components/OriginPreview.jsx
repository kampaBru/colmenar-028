import "./OriginPreview.css";
import { Link } from "react-router-dom";
import compromiso from "../assets/img/collectionpre/img-compromiso.webp";
import compromisoIcon from "../assets/icons/compromiso.png";
import origen from "../assets/icons/origen.png";

function OriginPreview() {
  return (
    <section className="compromiso">
      <div className="container-global">
        <div className="compromiso-content">
          <div className="compromiso-img">
            <img
              src={compromiso}
              alt="Panal y polen de una colmena"
            />
          </div>

          <div className="compromiso-text">
            <div className="compromiso-eyebrow">
              <img
                src={compromisoIcon}
                className="eyebrow-img"
                alt=""
              />

              <h2 className="eyebrow-title">
                Compromiso con la naturaleza
              </h2>
            </div>
          </div>

          <div className="compromiso-title">
            <h2 className="compromiso-heading">
              Por qué decidimos
              <span className="compromiso-highlight">
                no retirar el polen
              </span>
            </h2>
          </div>

          <div className="compromiso-body">
            <p>
              Nuestra prioridad es el bienestar de las abejas. Por eso,
              hemos elegido no retirar el polen, permitiendo que la
              colmena conserve sus recursos naturales vitales para su
              salud y para garantizar una polinización saludable en el
              entorno.
            </p>
          </div>

          <div className="compromiso-quote">
            <div className="quote-icon">
              <img
                src={origen}
                className="quote-img"
                alt=""
              />
            </div>

            <div className="quote-divider"></div>

            <h3 className="quote-heading">
              No buscamos el beneficio comercial, sino el
              <span className="quote-highlight">
                equilibrio ecológico
              </span>
            </h3>
          </div>

          <div className="compromiso-actions">
            <Link
              to="/origen"
              className="btn-primary"
            >
              Leer más →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginPreview;