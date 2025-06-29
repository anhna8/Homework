const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <p>Usuario: @{user.username}</p>
    </div>
  );
};

export default Profile;
