import "./ProductCard.css";

import { Heart, Star, ShoppingCart } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

import type { Product } from "../../features/products/productTypes";

interface Props {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

function ProductCard({ product, isFavorite, onToggleFavorite }: Props) {
  return (
    <article className="product-card">
      <button
        className={`favorite-icon ${isFavorite ? "active" : ""}`}
        aria-label="favorite button"
        onClick={() => onToggleFavorite(product.id)}
      >
        <Heart
          size={20}
          fill={isFavorite ? "#ec4899" : "none"}
          color={isFavorite ? "#ec4899" : "#6b7280"}
        />
      </button>

      <div className="image-wrapper">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>

      <div className="product-content">
        <span className="category-badge">{product.category}</span>

        <h3>{product.title}</h3>

        <div className="price-row">
          <p className="price">{formatCurrency(product.price)}</p>
        </div>

        <div className="rating-row">
          <Star size={16} fill="#facc15" color="#facc15" />

          <span>{product.rating}</span>
        </div>

        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={() => onToggleFavorite(product.id)}
        >
          <Heart size={18} />

          {isFavorite ? "Favorited" : "Add To Favorites"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
