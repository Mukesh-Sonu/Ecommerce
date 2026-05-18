import { createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";

const LIMIT = 20;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",

  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const skip = state.products.skip;

    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );

    const data = await response.json();

    return data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",

  async (category: string) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    const data = await response.json();

    return data.products;
  }
);
