import { Link } from "react-router-dom";
import "./Product.css";
import InfoGrid from "../components/InfoGrid";
import { productBenefits } from "../data/productBenefits";
import mielRomero from "../assets/img/products/miel-romero.webp";

function Product() {
  return (
    <>
      <div className="product-navigation">
        <div className="container-global">
          <Link
            to="/coleccion"
            className="product-navigation__back"
          >
            ← Volver a colección
          </Link>
        </div>
      </div>

      <main className="product-page">
        <section className="product-hero">
          <div className="container-global product-hero__container">
            <div className="product-hero__image-wrapper">
              <img
                src={mielRomero}
                alt="Tarro de miel de romero"
                className="product-hero__image"
              />
            </div>

            <div className="product-hero__content">
              <h1 className="product-hero__title">
                Miel de Romero
              </h1>

              <p className="product-hero__description">
                Aroma intenso y persistente, con notas herbales y
                ligeramente dulces.
              </p>
            </div>
          </div>
        </section>

        <section
          className="product-benefits"
          aria-label="Beneficios de la miel de romero"
        >
          <InfoGrid
            items={productBenefits}
            columns={4}
          />
        </section>

        <section className="product-features">
          <div className="container-global product-features__container">
            <div className="product-features__about">
              <h2 className="product-features__title">
                Sobre esta miel
              </h2>

              <p className="product-features__description">
                Nuestra miel de romero proviene de colmenas ubicadas en
                los montes de La Alcarria, donde el romero crece en
                abundancia durante la primavera. Su aroma es intenso y
                persistente, con notas herbales y ligeramente dulces que
                la hacen única.
              </p>
            </div>

            <div className="product-features__specs">
              <h2 className="product-features__title">
                Características
              </h2>

              <dl className="product-specs">
                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Color
                  </dt>
                  <dd className="product-specs__value">
                    Ámbar claro
                  </dd>
                </div>

                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Aroma
                  </dt>
                  <dd className="product-specs__value">
                    Herbal, intenso y persistente
                  </dd>
                </div>

                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Sabor
                  </dt>
                  <dd className="product-specs__value">
                    Herbal, ligeramente dulce
                  </dd>
                </div>

                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Textura
                  </dt>
                  <dd className="product-specs__value">
                    Fluida y delicada
                  </dd>
                </div>

                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Origen
                  </dt>
                  <dd className="product-specs__value">
                    Montes de La Alcarria
                  </dd>
                </div>

                <div className="product-specs__row">
                  <dt className="product-specs__term">
                    Floración principal
                  </dt>
                  <dd className="product-specs__value">
                    Romero
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="product-actions">
          <div className="container-global product-actions__container">
            <button
              type="button"
              className="product-actions__buy"
            >
              Comprar
            </button>

            <Link
              to="/origen"
              className="product-actions__more"
            >
              Saber más sobre nuestras prácticas
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;