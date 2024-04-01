import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './quotes/quotes.reducer';
import loadingReducer from './loading/loading.reducer';

const rootReducer = combineReducers({
    quotes: quotesReducer,
    loading: loadingReducer,
})


const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch

export default store;
