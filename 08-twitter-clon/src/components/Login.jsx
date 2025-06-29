import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inicia Sesión</h2>
      <input
        type="text"
        value={username}
        placeholder="Nombre de usuario"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
