import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>Información de Catálogo</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Envío</a></li>
            <li><a href="#">Tarjetas de regalo</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suscripción al boletín</h4>
          <p>Suscríbete a nuestro boletín para recibir noticias y promociones.</p> 
          <form>
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </footer>
  );
};
