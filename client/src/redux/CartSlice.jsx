import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [], // All products in the cart
    filteredData: [], // Filtered products by category
    category: "all", // Current selected category
  },
  reducers: {
    add(state, action) {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity if the item is already in the cart
      } else {
        state.data.push({ ...action.payload, quantity: 1 }); // Add the item with quantity 1
      }
      filterCartProducts(state); // Reapply filtering
    },
    remove(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
      filterCartProducts(state);
    },
    increment(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      filterCartProducts(state);
    },
    decrement(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload); // Remove item if quantity goes to 0
      }
      filterCartProducts(state);
    },
    setCartCategory(state, action) {
      state.category = action.payload;
      filterCartProducts(state);
    },
  },
});

// Helper function to filter cart products
function filterCartProducts(state) {
  state.filteredData =
    state.category === "all"
      ? state.data
      : state.data.filter((item) => item.category === state.category);
}

export const { add, remove, increment, decrement, setCartCategory } = cartSlice.actions;
export default cartSlice.reducer;
