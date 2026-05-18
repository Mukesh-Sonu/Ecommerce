import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "./productTypes";

import { fetchProducts, fetchProductsByCategory } from "./productsThunk";

interface ProductsState {
  products: Product[];

  loading: boolean;

  error: string | null;

  skip: number;

  hasMore: boolean;

  category: string;

  rating: number;

  sortOrder: string;
}

const initialState: ProductsState = {
  products: [],

  loading: false,

  error: null,

  skip: 0,

  hasMore: true,

  category: "",

  rating: 0,

  sortOrder: "",
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    resetProducts: (state) => {
      state.products = [];

      state.skip = 0;

      state.hasMore = true;
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },

    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;

        state.products = [...state.products, ...action.payload.products];

        state.skip += 20;

        state.hasMore = action.payload.products.length > 0;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;

        state.error = "Failed to fetch products";

        state.hasMore = false;
      })

      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        fetchProductsByCategory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;

          state.products = action.payload;

          state.hasMore = false;
        }
      )

      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.loading = false;

        state.error = "Failed to fetch category products";

        state.hasMore = false;
      });
  },
});

export const {
  resetProducts,
  setCategory,
  setRating,
  setSortOrder,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
