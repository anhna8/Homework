import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import './App.css';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };



<nav>
  {user ? (
    <>
      <Link to="/">Inicio</Link>
      <Link to="/profile">Perfil</Link>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  ) : (
    <Link to="/login">Iniciar sesión</Link>
  )}
</nav>



  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} logout={logout} />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  </Router>
);
};

export default App;
