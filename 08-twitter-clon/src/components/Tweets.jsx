const tweets = [
  {
    id: 1,
    author: "@murcielagita",
    content: "¡Esta noche los commits se hacen con colmillos! 🧛‍♀️",
  },
  {
    id: 2,
    author: "@dracode",
    content: "¿Refactorizar o convertir en murciélago ese código? 🤔🦇",
  },
  {
    id: 3,
    author: "@vampdev",
    content: "Dormir está sobrevalorado. Prefiero debuggear en la oscuridad.",
  },
];

const TweetFeed = () => {
  return (
    <div className="mt-4">
      <h3 className="mb-3" style={{ color: "#ff0055" }}>Últimos Aullidos 🦇</h3>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="card mb-3"
          style={{ backgroundColor: "#1c1c1c", color: "#e0e0e0", border: "1px solid #333" }}
        >
          <div className="card-body">
            <h5 className="card-title">{tweet.author}</h5>
            <p className="card-text">{tweet.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetFeed;
