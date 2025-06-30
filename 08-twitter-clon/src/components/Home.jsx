import TweetFeed from './Tweets';

const Home = ({ user, logout }) => {
  return (
    <div className="container mt-5 text-light">
      <h1 style={{ color: "#ff0055" }}>Bienvenido a BatTweet 🦇</h1>
      {user ? (
        <>
          <p>Hola, @{user.username}!</p>
          <button className="btn btn-danger mb-3" onClick={logout}>Cerrar sesión</button>
          <TweetFeed />
        </>
      ) : (
        <p>Por favor inicia sesión para ver los aullidos.</p>
      )}
    </div>
  );
};

export default Home;
