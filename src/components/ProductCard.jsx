import { Link } from "react-router-dom";
import "./ProductCard.css"

function ProductCard({product}) {
  return (
    <article className="product-card">
      <h3 className="product-card__title">{product.name}</h3>
      <img 
      className="product-card__image"
        src={product.image} 
        alt={product.alt} 
      />
      <div className="product-card__content">
        <p className="product-card__description">{product.description}</p>
        <Link to="/product" className="btn-product">
          <span>Ver más</span>
          <span className="btn-product__arrow">→</span>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;