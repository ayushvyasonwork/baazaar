import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "Idle",
  LOADING: "loading",
  ERROR: "Error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    allData: [], // Store all fetched products
    filteredData: [], // Store products filtered by category
    status: STATUSES.IDLE,
    category: "all",
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      // Reuse the filtering logic
      filterProducts(state);
    },
    setAllProducts(state, action) {
      state.allData = action.payload;
      // Reuse the filtering logic
      filterProducts(state);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

// Helper function to filter products based on category
function filterProducts(state) {
  state.filteredData =
    state.category === "all"
      ? state.allData
      : state.allData.filter((item) => item.category === state.category);
}

export const { setAllProducts, setStatus, setCategory } = productSlice.actions;
export default productSlice.reducer;

// Thunk for fetching products
export function fetchProducts() {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setAllProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
      console.error(error);
    }
  };
}
