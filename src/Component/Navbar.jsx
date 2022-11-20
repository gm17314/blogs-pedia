import React, { useContext } from "react";
import "./Navbar.css";
import { FaPencilAlt, FaSearch, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RiHomeSmileFill } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebaseconfig";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const currentUser = useContext(AuthContext);

  const logOut=()=>{
    signOut(auth);
  }

  const hamburger = () => (open ? setOpen(false) : setOpen(true));
  return (
    <nav className="d-flex" style={{ justifyContent: "space-between" }}>
      <div className="logo d-flex">Blogspedia</div>
      <div
        className="hamburger d-flex"
        style={{ fontSize: `${open ? "3rem" : "4rem"}` }}
        onClick={hamburger}
      >
        {open ? <ImCross /> : <GoThreeBars />}
      </div>
      <ul className={`navmenu d-flex ${open ? "active" : ""}`}>
        <li>
          <Link to="/">
            <div className="navmenu-items d-flex" onClick={hamburger}>
              <RiHomeSmileFill /> <span className="iconname">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <div className="navmenu-items d-flex" onClick={hamburger}>
              <FaPencilAlt /> <span className="iconname">Create</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <div className="navmenu-items d-flex" onClick={hamburger}>
              <FaSearch /> <span className="iconname">SearchUser</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/profile/${currentUser.uid}`}>
            <div className="navmenu-items d-flex" onClick={hamburger}>
              <FaUserCircle /> <span className="iconname">Profile</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="nav-userdetail d-flex">
        <span className="username">{currentUser.displayName}</span>
        <img
          src={currentUser.photoURL}
          alt=""
        />
        <button className="logout" onClick={logOut}>LogOut</button>
      </div>
    </nav>
  );
};

export default Navbar;
