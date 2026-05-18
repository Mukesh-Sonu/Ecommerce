import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { loadFavorites, saveFavorites } from "../../utils/localStorage";

interface FavoriteState {
  items: number[];
}
const initialState: FavoriteState = {
  items: loadFavorites(),
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
      saveFavorites(state.items);
    },
  },
});
export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
