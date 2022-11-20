import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import ReadBlog from "./Pages/ReadBlog";

function App() {
  const currentUser = useContext(AuthContext);
  // const ProtectedRoute = ({ children }) => {
  //   // (currentUser?children:<Navigate to="/login" />);
  //   if (currentUser) {
  //     return children;
  //   } else {
  //         return <Navigate to="/login" />;
  //   }
  // };
  return (
    <BrowserRouter>
      {currentUser && <Navbar />}

      <Routes>
        <Route path="/login" element={!currentUser ? <Login /> : <Home />} />
        <Route path="/signup" element={!currentUser ? <Signup /> : <Home />} />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            !currentUser ? <Login /> :
              <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            // <ProtectedRoute>
            !currentUser ? <Login /> :
              <CreateBlog />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            // <ProtectedRoute>
            !currentUser ? <Login /> :
              <Search />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/read/:docID"
          element={
            // <ProtectedRoute>
            !currentUser ? <Login /> :
              <ReadBlog />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:userID"
          element={
            // <ProtectedRoute>
            !currentUser ? <Login /> :
              <Profile />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
