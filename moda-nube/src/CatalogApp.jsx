import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
// import { Footer } from './components/layout/Footer';
import { Footer, Header } from './catalog';
import { Products } from './catalog/layouts/Products.jsx'


export const CatalogApp = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <AppRouter />
        <Products />
        <Footer />

      </div>
    </BrowserRouter>
  );
};
