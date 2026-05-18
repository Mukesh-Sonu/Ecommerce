import favoritesReducer, {
  toggleFavorite,
} from "../features/favorites/favoritesSlice";

describe("favoritesSlice", () => {
  test("should add favorite", () => {
    const state = {
      items: [],
    };
    const result = favoritesReducer(state, toggleFavorite(1));
    expect(result.items).toContain(1);
  });
  test("should remove favorite", () => {
    const state = {
      items: [1],
    };
    const result = favoritesReducer(state, toggleFavorite(1));
    expect(result.items).not.toContain(1);
  });
});
