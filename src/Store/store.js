// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './features/authSlice/authSlice'
// import adminUserReducer from "./features/Admin/userSlice"
// import categoryReduce from "./features/category/categorySlice"
// import productReduce from "./features/product/productSlice"
// import cartReduce from "./features/cartSlice/cartSlice"

// export  const store = configureStore({
//   reducer: {
//     auth:authReducer,
//     adminUser:adminUserReducer,
//     category:categoryReduce,
//     product:productReduce,
//     cart:cartReduce,
//   },
// })





import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage is localStorage
import { combineReducers } from 'redux';
import authReducer from './features/authSlice/authSlice';
import adminUserReducer from './features/Admin/userSlice';
import categoryReduce from './features/category/categorySlice';
import productReduce from './features/product/productSlice';
import cartReduce from './features/cartSlice/cartSlice';

// Persist configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,  // LocalStorage
  whitelist: ['auth'],  // Persist only auth and cart reducers
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  adminUser: adminUserReducer,
  category: categoryReduce,
  product: productReduce,
  cart: cartReduce,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor for redux-persist
export const persistor = persistStore(store);