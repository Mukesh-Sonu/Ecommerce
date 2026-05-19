import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard/ProductCard";

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
    expect(screen.getByText("$999")).toBeInTheDocument();
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
    fireEvent.click(screen.getByRole("button"));
    expect(toggleMock).toHaveBeenCalled();
  });
});
