import { useEffect, useState } from 'react';
import './Products.css';
import { getAllProducts } from '../../services/productService.js';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getAllProducts()
        setProducts(productsResponse);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleCardClick = (productId) => {
    if (expandedProductId === productId) {
      // Si la tarjeta ya está expandida, la contraemos
      setExpandedProductId(null);
    } else {
      // Si la tarjeta no está expandida, la expandimos
      setExpandedProductId(productId);
    }
  };

  const handleHeartClick = (e, productId) => {
    e.stopPropagation(); // Evitar que el clic se propague al contenedor de la tarjeta
    // Toggle favorito
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((favId) => favId !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="body-container ">
        <h1 className="title-products">NUEVA COLECCIÓN</h1>
      <div className="container-products container fluid">
        {products.map((product) => (
            <div
              className={`card-products ${expandedProductId === product.id ? 'expanded' : ''}`}
              key={product.id}
              onClick={() => handleCardClick(product.id)}
            >
              <img className="card-img-products img-fluid" src={product.image} alt={product.title} />
              <div className="card-body-products">
                <h5 className="card-title-products">{product.title}</h5>
                {expandedProductId === product.id && (
                  <p className="card-description-products">{product.description}</p>
                )}
                <div className="card-container-icon">
                  <p className="card-text-products">US${product.price}</p>
                  <i
                    className={`heart-icon ${favorites.includes(product.id) ? 'fas' : 'far'} fa-heart`}
                    onClick={(e) => handleHeartClick(e, product.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}          
      </div>
    </div>
  );
};
