import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
// import { Footer } from './components/layout/Footer';
import { Footer, Header } from './catalog';

export const CatalogApp = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
