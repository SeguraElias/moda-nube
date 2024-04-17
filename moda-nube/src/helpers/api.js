import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const searchProducts = async (term) => {
  try {
    const response = await axios.get(`${BASE_URL}/products?search=${term}`);
    return response.data;
    
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

// Función para obtener todas las categorías de productos
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
