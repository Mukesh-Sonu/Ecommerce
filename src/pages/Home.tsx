import { useEffect, useMemo, useState, useCallback } from "react";

import { Moon, Sun } from "lucide-react";

import { fetchCategoriesApi } from "../api/ProductApi";

import FiltersBar from "../components/FiltersBar/FiltersBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ProductSkeleton from "../components/Skeleton/ProductSkeleton";

import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useTheme from "../hooks/useTheme";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import {
  resetProducts,
  setCategory,
  setRating,
  setSortOrder,
  clearError,
} from "../features/products/productSlice";

import {
  fetchProducts,
  fetchProductsByCategory,
} from "../features/products/productsThunk";

import { toggleFavorite } from "../features/favorites/favoritesSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const { theme, toggleTheme } = useTheme();

  const { products, loading, hasMore, error, category, rating, sortOrder } =
    useAppSelector((state) => state.products);

  const favorites = useAppSelector((state) => state.favorites.items);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategoriesApi();

      setCategories(data);
    };

    getCategories();
  }, []);

  useEffect(() => {
    dispatch(resetProducts());

    if (category) {
      dispatch(fetchProductsByCategory(category));
    } else {
      dispatch(fetchProducts());
    }
  }, [category, dispatch]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore && !category) {
      dispatch(fetchProducts());
    }
  }, [loading, hasMore, category, dispatch]);

  const filteredProducts = useMemo(() => {
    let updatedProducts = [...products];

    if (rating) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating >= rating
      );
    }

    if (sortOrder === "asc") {
      return [...updatedProducts].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "desc") {
      return [...updatedProducts].sort((a, b) => b.price - a.price);
    }

    return updatedProducts;
  }, [products, rating, sortOrder]);

  const loadMoreRef = useInfiniteScroll({
    callback: handleLoadMore,
  });

  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="heading">E-Commerce Store</h1>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <FiltersBar
        category={category}
        rating={rating}
        sortOrder={sortOrder}
        categories={categories}
        onCategoryChange={(value) => dispatch(setCategory(value))}
        onRatingChange={(value) => dispatch(setRating(value))}
        onSortChange={(value) => dispatch(setSortOrder(value))}
      />

      {error && (
        <div className="api-error">
          <p>{error}</p>

          <button
            onClick={() => {
              dispatch(clearError());

              dispatch(resetProducts());

              dispatch(fetchProducts());
            }}
          >
            Retry
          </button>
        </div>
      )}

      {loading && products.length === 0 ? (
        <div className="products-layout skeleton-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          favorites={favorites}
          onToggleFavorite={(id) => dispatch(toggleFavorite(id))}
        />
      )}

      {loading && products.length > 0 && !category && (
        <div className="products-layout bottom-skeletons">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}

      {!loading && hasMore && !category && (
        <div ref={loadMoreRef} style={{ height: "20px" }} />
      )}
    </div>
  );
};

export default Home;
