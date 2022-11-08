import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

function App() {
  const currentUser = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    } else {
      return children;
    }
  };
  return (
    <BrowserRouter>
 
        {currentUser && <Navbar />}

      <Routes>
        <Route path="/login" element={(!currentUser)?<Login />:<Home/> } />
        <Route path="/signup" element={(!currentUser)?<Signup />:<Home/>} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:userID"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
