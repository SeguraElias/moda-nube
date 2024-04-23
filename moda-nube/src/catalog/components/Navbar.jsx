import './Navbar.css';
import logoModaNube from '../../assets/images/logo-txt.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid align-items-between">
        <div className='nav-menu'>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="*" className={"nav-link"} data-bs-toggle={"pill"}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={"nav-link"} data-bs-toggle={"pill"}>Catalogo</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <img className="logo-nav img-fluid" src={logoModaNube} alt="Logo ModaNube" />
      
        <div className="nav-right">  
          <div className="icon-container me-4" onClick={toggleSearch}>
            <i className="fas fa-cloud"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
