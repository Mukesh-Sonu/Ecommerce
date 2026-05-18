export const loadFavorites = (): number[] => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = (favorites: number[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
