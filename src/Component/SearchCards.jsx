import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState,useContext } from "react";
import styled from "styled-components";
import { db } from "../Firebaseconfig";
import SearchCard from "./SearchCard";
import { AuthContext } from "../AuthContext";

const SearchCards = () => {
  const currentUser = useContext(AuthContext);
  const collectionRef = collection(db, "users");
  const [blogs, setBlogs] = useState([]);

  //! Realtime Read of todos
  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    // console.log(blogs)
    return () => {
      unsub();
    };

    // eslint-disable-next-line
  }, []);

  const Cards = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    /* background-color: #D6E4F0; */
  `;
  return (
    <Cards>
      {blogs.map((ele) => {
          return (
            (currentUser.uid !== ele.id) &&
            <SearchCard
              key={ele.id}
              email={ele.mail}
              photoURL={ele.photoURL}
              displayName={ele.displayName}
              userID={ele.id}
            />
          );
      })}
    </Cards>
  );
};

export default SearchCards;
