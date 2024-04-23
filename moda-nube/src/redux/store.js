import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  catalog: combineReducers({
    products: productsReducer, // Agrega solo el reducer de productos al combineReducers
  }),
});

// Creamos el store de Redux
const store = createStore(rootReducer);

export { store, rootReducer };
