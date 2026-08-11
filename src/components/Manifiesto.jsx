import './Manifiesto.css';
import filosofia from "../assets/img/manifiesto/img-filosofia.webp";

function Manifiesto(){
  
  return (

  <section className="manifiesto">
    <div className="container-global manifiesto-container">
      <div className="manifiesto-image">
        <img src={filosofia} alt="" />
      </div>
      <div className="manifiesto-text">
        <h2 className="manifiesto-title">Nuestra filosofía</h2>
        <p className="manifiesto-description">
          Cuidamos las abejas respetando sus ciclos naturales y su papel esencial en el equilibrio del ecosistema. Nuestra prioridad no es producir más, sino convivir mejor con la naturaleza.
        </p>
        <p className="manifiesto-quote">
          Antes de producir miel,
          <span>las abejas hacen posible la vida</span>
        </p>
      </div>
    </div>
  </section>

  )

}
export default Manifiesto

