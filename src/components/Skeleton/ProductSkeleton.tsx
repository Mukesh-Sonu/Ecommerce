import "./ProductSkeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image shimmer" />

      <div className="skeleton-content">
        <div className="skeleton-badge shimmer" />

        <div className="skeleton-title shimmer" />

        <div className="skeleton-price shimmer" />

        <div className="skeleton-rating shimmer" />

        <div className="skeleton-button shimmer" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
