// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/contactsSlice'; // Import your root reducer
const store = configureStore({
  reducer: rootReducer,
});
// export type RootState = ReturnType<typeof store.getState>;
export default store;
