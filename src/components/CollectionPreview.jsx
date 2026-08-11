import "./CollectionPreview.css";
import { Link } from "react-router-dom";
import  flores from "../assets/img/collectionpre/img-flores.webp";
import romero from "../assets/img/collectionpre/img-romero.webp";

function CollectionPreview() {
  return (
    <section className="collection">
      <div className="container-global">
        <div className="collection-heading">
          <h2>Nuestra colección</h2>
        </div>

        <div className="card">
          <article className="card-product">
            <div className="card-image">
              <img
                src={flores}
                alt="Campo de flores"
              />
            </div>

            <div className="collection-text">
              <h3 className="collection-title">
                Miel de Milflores
              </h3>

              <p className="collection-description">
                Miel procedente de campos, montes y praderas, rica en matices
                gracias a la diversidad floral de su entorno.
              </p>
            </div>

            <div className="collection-actions">
              <Link
                to="/coleccion"
                className="btn-primary"
              >
                Descubrir
              </Link>
            </div>
          </article>

          <article className="card-product">
            <div className="card-image">
              <img
                src={romero}
                alt="Campo de romero"
              />
            </div>

            <div className="collection-text">
              <h3 className="collection-title">
                Miel de Romero
              </h3>

              <p className="collection-description">
                Miel monofloral de romero, suave y aromática, con delicadas
                notas florales y un carácter fresco propio del paisaje
                mediterráneo.
              </p>
            </div>

            <div className="collection-actions">
              <Link
                to="/coleccion"
                className="btn-primary"
              >
                Descubrir
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CollectionPreview;