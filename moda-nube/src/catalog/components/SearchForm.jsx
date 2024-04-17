/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { searchProducts } from '../../helpers/api'; 

export const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
    
      const results = await searchProducts(searchTerm);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  return (
    <div style={{ overflow: 'hidden', backgroundColor: 'transparent', textAlign: 'center' }}>
      <form onSubmit={handleSearch} style={{ width: '100%', display: 'inline-block' }}>
        <input 
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '6px', marginTop: '8px', fontSize: '17px', border: 'none', marginRight: '5px', width: 'calc(100% - 45px)' }}
        />
        <button type="submit" style={{ padding: '6px 10px', marginTop: '8px', background: '#fff', fontSize: '17px', border: 'none', cursor: 'pointer' }}><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};
