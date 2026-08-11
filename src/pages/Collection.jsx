  import './Collection.css';
  import collectionFeatures from '../data/collectionFeatures';
  import InfoGrid from '../components/InfoGrid';
  import InfoCard from '../components/InfoCard';
  import ProductGrid from '../components/ProductGrid';
  import { products } from '../data/products';
  import { Link } from "react-router-dom";

  



  function Collection() {
    return (
    <main>
      <section className="collection-hero">
        <div className="container-global collection-hero__content">
          <div className="collection-hero__text">
            <p className='collection-hero__label'>Colección</p>
            <span
              className="hero__separator"
              aria-hidden="true"
            ></span>
            
            <h1>Mieles nacidas del paisaje</h1>
            <p className='collection-hero__description'>
              Cada cosecha refleja la floración, el clima y la riqueza natural de La Alcarria.
              Mieles elaboradas de forma artesanal, respetando los ritmos de las abejas y del entorno.
            </p>
          </div>
        </div>
          <div className='collection-hero__art'>
            <div className='flower-big'></div>
            <div className='flower-small'></div>
            <div className='bee'></div>            
          </div>
      </section>
      <section className="collection-intro">
        <div className="container-global">
          <InfoCard>
            <div className="info-content">
              <h2 className="section-title">
                Mieles ligadas al territorio
              </h2>
              <p className="section-text">
                Las mieles de Colmenar 028 nacen de un entorno único, donde campos
                de cultivo, monte bajo y especies aromáticas conviven creando una
                gran diversidad floral.
              </p>
            </div>

          <InfoGrid
            items={collectionFeatures}
            columns={2}
          />
          </InfoCard>
        </div>
      </section>
      
      <section className='collection-product'>
        <div className='container-global'>
          <div className='product-description'>
            <p className='text-title'>Nuestra colección</p>
            <h2 className='text-description'>Descubre las mieles de nuestras cosechas</h2>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
      
      <section className="collection-philosophy">
        <div className="container-global collection-philosophy__container">
          <div className="info-content collection-philosophy__content">
            <h2 className="section-title collection-philosophy__title">
              Más que miel,
              <span>una forma de vida</span>
            </h2>
            <p className="section-text collection-philosophy__description">
              Nuestro trabajo va más allá de la producción. Es respeto, es paciencia,
              es cuidar de las abejas para que ellas cuiden de nosotros.
            </p>
          </div>
          <div className="collection-actions">
            <Link to="/origen" className="btn-filled">
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>
    </main>
    )
  }

  export default Collection