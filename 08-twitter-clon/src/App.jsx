import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
        path="/profile"
        element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;