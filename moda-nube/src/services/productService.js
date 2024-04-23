import { searchProducts } from '../helpers/api.js';

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    return await searchProducts('');
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


