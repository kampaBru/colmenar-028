import "./Origen.css";
import InfoGrid from "../components/InfoGrid";
import { originImpact } from "../data/originImpact";
import { originProcess } from "../data/originProcess";


import origenPradera from "../assets/img/origen/origen-pradera.webp";
import origenColmena from "../assets/img/origen/origen-colmena.webp";
import origenAlcarria from "../assets/img/origen/origen-alcarria.webp";

import iconUbicacion from "../assets/icons/icon-ubicacion.svg";
import iconCorazon from "../assets/icons/icon-corazon.svg";
import iconHoja from "../assets/icons/icon-hoja.svg";


function Origen() {
  return (
    <main className="origin-page">
      <section className="origin-hero">
        <div className="container-global origin-hero__container">
          <div className="origin-hero__content">
            <p className="origin-hero__label">
              Origen
            </p>

            <span
              className="hero__separator"
              aria-hidden="true"
            ></span>

            <h1 className="origin-hero__title">
              Antes que miel,
              <span>cuidamos la vida</span>
            </h1>

            <p className="origin-hero__description">
              Colmenar 028 nace desde una convicción: proteger a las
              abejas y preservar el equilibrio natural del que todos
              dependemos.
            </p>
          </div>
        </div>
      </section>

      <div className="origin-hero__image-wrapper">
        <img
          src={origenPradera}
          alt="Pradera florida de La Alcarria"
          className="origin-hero__image"
        />
      </div>

      <section className="origin-story">
        <div className="container-global origin-story__container">
          <div className="origin-story__content">
            <h2 className="origin-section-title">
              ¿Por qué comenzamos?
            </h2>

            <p className="origin-section-text">
              Iniciarse en la apicultura no siempre es rentable.
              Nuestro proyecto nace con una idea diferente: contribuir
              positivamente al medio ambiente y cuidar de un ser
              esencial para la vida en el planeta.
            </p>
          </div>

          <div className="origin-story__image-wrapper">
            <img
              src={origenColmena}
              alt="Colmena de abejas en un entorno natural"
              className="origin-story__image"
            />
          </div>
        </div>
      </section>

      <section className="origin-impact">
        <div className="container-global">
          <h2 className="origin-section-title origin-impact__title">
            Mucho más que producir miel
          </h2>

          <InfoGrid
            items={originImpact}
            columns={2}
          />
        </div>
      </section>

      <section className="origin-principles">
        <div className="container-global origin-principles__container">
          <article className="origin-principles__card">
            <h2 className="origin-principles__title">
              Apicultura responsable
            </h2>

            <ul className="origin-principles__list">
              <li className="origin-principles__item">
                <img
                  src={iconUbicacion}
                  alt=""
                  className="origin-principles__icon"
                />

                <div>
                  <h3 className="origin-principles__item-title">
                    Observación constante
                  </h3>

                  <p className="origin-principles__text">
                    Conocemos y entendemos el comportamiento de
                    nuestras abejas para cuidarlas mejor.
                  </p>
                </div>
              </li>

              <li className="origin-principles__item">
                <img
                  src={iconCorazon}
                  alt=""
                  className="origin-principles__icon"
                />

                <div>
                  <h3 className="origin-principles__item-title">
                    Paciencia y dedicación
                  </h3>

                  <p className="origin-principles__text">
                    Respetamos el ritmo natural de las colmenas. La
                    prisa no forma parte de nuestro trabajo.
                  </p>
                </div>
              </li>

              <li className="origin-principles__item">
                <img
                  src={iconHoja}
                  alt=""
                  className="origin-principles__icon"
                />

                <div>
                  <h3 className="origin-principles__item-title">
                    Respeto por la naturaleza
                  </h3>

                  <p className="origin-principles__text">
                    Evitamos dañar el medio natural y promovemos
                    prácticas sostenibles en cada decisión.
                  </p>
                </div>
              </li>
            </ul>
          </article>

          <article className="origin-principles__card">
            <h2 className="origin-principles__title">
              Lo que decidimos no hacer
            </h2>

            <ul className="origin-principles__list">
              <li className="origin-principles__item">
                <span
                  className="origin-principles__avoid-icon"
                  aria-hidden="true"
                >
                  ×
                </span>

                <div>
                  <h3 className="origin-principles__item-title">
                    No buscamos maximizar la producción
                  </h3>

                  <p className="origin-principles__text">
                    La cantidad nunca está por encima del bienestar.
                  </p>
                </div>
              </li>

              <li className="origin-principles__item">
                <span
                  className="origin-principles__avoid-icon"
                  aria-hidden="true"
                >
                  ×
                </span>

                <div>
                  <h3 className="origin-principles__item-title">
                    No recolectamos polen
                  </h3>

                  <p className="origin-principles__text">
                    Es un recurso vital para alimentar a la colonia.
                  </p>
                </div>
              </li>

              <li className="origin-principles__item">
                <span
                  className="origin-principles__avoid-icon"
                  aria-hidden="true"
                >
                  ×
                </span>

                <div>
                  <h3 className="origin-principles__item-title">
                    No alteramos recursos esenciales
                  </h3>

                  <p className="origin-principles__text">
                    No comprometemos la salud ni el equilibrio de
                    nuestras abejas.
                  </p>
                </div>
              </li>

              <li className="origin-principles__item">
                <span
                  className="origin-principles__avoid-icon"
                  aria-hidden="true"
                >
                  ×
                </span>

                <div>
                  <h3 className="origin-principles__item-title">
                    No anteponemos el producto al bienestar
                  </h3>

                  <p className="origin-principles__text">
                    El bienestar de las abejas es siempre la prioridad.
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="origin-landscape">
        <div className="container-global origin-landscape__container">
          <div className="origin-landscape__content">
            <h2 className="origin-section-title">
              La Alcarria,
              <span>nuestro ecosistema</span>
            </h2>

            <p className="origin-section-text origin-landscape__description">
              Nuestras colmenas se encuentran en La Alcarria, un
              territorio de monte bajo, romero, tomillo, lavanda,
              encinas y cultivos tradicionales.
            </p>

            <p className="origin-landscape__highlight">
              Aquí, la diversidad floral da origen a mieles únicas y
              auténticas.
            </p>
          </div>

          <div className="origin-landscape__image-wrapper">
            <img
              src={origenColmena}
              alt="Paisaje natural de La Alcarria"
              className="origin-landscape__image"
            />
          </div>
        </div>
      </section>

      <section className="origin-process">
        <div className="container-global">
          <h2 className="origin-section-title origin-process__title">
            Nuestro proceso
          </h2>

          <InfoGrid
            items={originProcess}
            columns={2}
          />

          <blockquote className="origin-process__quote">
            <span
              className="origin-process__quote-mark"
              aria-hidden="true"
            >
              “
            </span>

            <p className="origin-process__quote-text">
              Protegemos a las abejas porque antes de producir miel,
              hacen posible la vida.
            </p>

            <span
              className="origin-process__quote-mark"
              aria-hidden="true"
            >
              ”
            </span>

            <footer className="origin-process__quote-footer">
              Por eso cuidamos su equilibrio antes que nuestra
              producción.
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

export default Origen;