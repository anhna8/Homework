const Home = ({ user, logout }) => {
  return (
    <div>
      <h1>Bienvenido a Twitter </h1>
      {user ? (
        <>
          <p>Hola, @{user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>Por favor inicia sesión</p>
      )}
    </div>
  );
};

export default Home;
