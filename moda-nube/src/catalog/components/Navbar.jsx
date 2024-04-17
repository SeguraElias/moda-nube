/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import './Navbar.css';
import { searchProducts } from '../../helpers/api';
import { Login } from '../../auth'
import logoModaNube from '../../assets/images/logo-text.png'


export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchVisible, setSearchVisible] = useState(false);

  const [loginVisible, setLoginVisible] = useState(false); 

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchProducts(searchTerm);
      console.log('Resultados de la búsqueda:', results);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setLoginVisible(false); 
  };

  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
    setSearchVisible(false);  
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="dropdown">
          <button className="dropbtn">Hombre</button>
          <div className="dropdown-content">
            <a href="#">Submenú 1</a>
            <a href="#">Submenú 2</a>
            <a href="#">Submenú 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Mujer</button>
          <div className="dropdown-content">
            <a href="#">Submenú 1</a>
            <a href="#">Submenú 2</a>
            <a href="#">Submenú 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Accesorios</button>
          <div className="dropdown-content">
            <a href="#">Submenú 1</a>
            <a href="#">Submenú 2</a>
            <a href="#">Submenú 3</a>
          </div>
        </div>
      </div>
      <div className="center-nav">
        <img className="logo-nav" src={logoModaNube} alt="Logo ModaNube" />
      </div>
      <div className="nav-right">  
        <div className="icon-container" onMouseEnter={toggleLogin} onMouseLeave={toggleLogin}>
          <i className="fas fa-user icon"></i>
          <span className="icon-label">Iniciar sesión</span>   
          
          {loginVisible && (
            <div className="login-form-container">
              <Login/>
            </div>
          )}
        </div>
        
        <div className="icon-container" onClick={toggleSearch}>
          <i className="far fa-heart icon"></i>
          <span className="icon-label">Favorito</span>
        </div>
        <div className="icon-container" onClick={toggleSearch}>
          <i className="fas fa-shopping-bag icon"></i>
          <span className="icon-label">Bolsa</span>
        </div>
        <div className="icon-container" onClick={toggleSearch}>
          <i className="fas fa-search icon"></i>
          <span className="icon-label">Búsqueda</span>
        </div>
      </div>
      
      {searchVisible && (
        <div className="search-form">
          <form onSubmit={handleSearch}>
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
      )}
    </nav>
  );
};

