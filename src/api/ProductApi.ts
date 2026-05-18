const BASE_URL = "https://dummyjson.com/products";

export const fetchProductsApi = async (limit: number, skip: number) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const fetchCategoriesApi = async () => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};
