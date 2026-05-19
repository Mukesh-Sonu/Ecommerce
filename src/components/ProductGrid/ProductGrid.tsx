import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../features/products/productTypes";
interface Props {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

const ProductGrid = ({ products, favorites, onToggleFavorite }: Props) => {
  return (
    <div className="products-layout">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
