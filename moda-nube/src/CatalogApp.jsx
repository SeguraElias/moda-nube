import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './catalog/layaout/Footer';
import { Navbar } from './catalog/components/Navbar';
import { Home } from './catalog/pages/Home';
import { Header } from './catalog/layaout/Header';
import { Products } from './catalog/layaout/Products';


export const CatalogApp = () => {
  return (    
    <BrowserRouter>
      <Header />
        <Navbar />
          <Routes>
            <Route path='/products' element={<Products />}/>
            <Route path='*' element={<Home />}/>
          </Routes>
      <Footer />
    </BrowserRouter>
  ); 
};


