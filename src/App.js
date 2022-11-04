import './App.css';
import Login from "./Pages/Login"
import Signup from './Pages/Signup';
import CreateBlog from "./Pages/CreateBlog";
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Search from './Pages/Search';
import Profile from './Pages/Profile';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
