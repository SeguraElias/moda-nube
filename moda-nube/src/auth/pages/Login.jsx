import { useState } from 'react';
import './Login.css'; 

export const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering); 
  };

  return (
    <div className="login-container"> 
      <div className="login-form-1"> 
        <h2>{isRegistering ? 'Registro' : 'Hola, Bienvenido'}</h2>
        {!isRegistering && <p>Ingresa tus datos para iniciar sesión</p>}
        {isRegistering && <p>Ingresa tus datos para registrarte</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required
            />
          </div>
          {!isRegistering && (
            <button type="submit" className="btnSubmit btn btn-primary">
              Ingresar
            </button>
          )}
          {isRegistering && (
            <button type="submit" className="btnSubmit btn btn-primary">
              Registrarse
            </button>
          )}
        </form>
        {!isRegistering && (
          <p>
            ¿No tienes una cuenta?{' '}
            <a href="#" className="register-link" onClick={toggleRegister}>
              Regístrate
            </a>
          </p>
        )}
        {isRegistering && (
          <p>
            ¿Ya tienes una cuenta?{' '}
            <a href="#" className="register-link" onClick={toggleRegister}>
              Iniciar sesión
            </a>
          </p>
        )}
        {!isRegistering && (
          <p>
            ¿Olvidaste tu contraseña?{' '}
            <a href="#" className="forgot-password-link">
              Recupérala aquí
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
