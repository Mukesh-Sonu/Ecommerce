import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";

import ProductCard from "../components/ProductCard/ProductCard";
import { formatCurrency } from "../utils/formatCurrency";

describe("ProductCard", () => {
  const product = {
    id: 1,
    title: "iPhone",
    price: 999,
    rating: 4.5,
    thumbnail: "image.jpg",
    category: "smartphones",
  };

  test("renders product details", () => {
    render(
      <ProductCard
        product={product}
        isFavorite={false}
        onToggleFavorite={() => {}}
        index={0}
      />
    );

    expect(screen.getByText("iPhone")).toBeInTheDocument();

    expect(screen.getByText(formatCurrency(product.price))).toBeInTheDocument();
  });

  test("calls toggle favorite", () => {
    const toggleMock = vi.fn();

    render(
      <ProductCard
        product={product}
        isFavorite={false}
        onToggleFavorite={toggleMock}
        index={0}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /favorite button/i,
      })
    );

    expect(toggleMock).toHaveBeenCalledWith(1);
  });
});
