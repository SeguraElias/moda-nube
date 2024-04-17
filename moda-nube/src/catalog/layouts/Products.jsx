import { useEffect, useState } from 'react';
import { searchProducts } from '../../helpers/api.js'; // Importa la función searchProducts desde api.js
import './products.css'
import {  AddToCartIcon } from '../../catalog/components/Icons.jsx'

export const Products = () => {
  const [products, setProductos] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    // Llama a la función searchProducts cuando el componente se monta
    const searchProductos = async () => {
      try {
        const productsResponse = await searchProducts(''); // Busca todos los productos (sin término de búsqueda)
        setProductos(productsResponse); // Almacena los productos en el estado
      } catch (error) {
        console.error('Error al buscar productos:', error); // Maneja los errores
      }
    };
    searchProductos();
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez

  return (

    <div>
        <h1 className='title-products'>Nuestros productos</h1>
        <div className="container-products">
            {products.map(producto => (
            <div className="card-products" key={producto.id}>
                <img className="card-img-products" src={producto.image} alt={producto.title} />
                <div className="card-body-products">
                    <h5 className="card-title-products">{producto.title}</h5>
                    <div className="card-container-icon">
                      <p className="card-text-products">US${producto.price} </p> 
                      <span className='card-icon'> <AddToCartIcon /></span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    );


    // <div>
    //     <h2>Lista de Productos</h2>
    //     <div className="card-columns d-flex justify-content-center flex-wrap ">
    //         {products.map(producto => (
    //         <div className="card mt-3 mb-3" style={{ width: "15%" }} key={producto.id}>
    //             <img className="card-img-top w-10" src={producto.image} alt={producto.title} />
    //             <div className="card-body">
    //                 <h5 className="card-title">{producto.title}</h5>
    //                 <p className="card-text">Price: ${producto.price}</p>
    //             </div>
    //         </div>
    //         ))}
    //     </div>
    // </div>
    // );
};


