import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flex } from "./Common";
import Card from "./Card";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebaseconfig";

const Cards = () => {
  const collectionRef = collection(db, "blogs");
  const [blogs, setBlogs] = useState([]);

  //! Realtime Read of todos
  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // console.log(blogs)
    return () => {
      unsub();
    };

    // eslint-disable-next-line
  }, []);

  const Cards = styled(flex)`
    width: 80%;
    padding: 2rem;
    margin: auto;
    justify-content: start;
    flex-direction: column;
  `;
  return (
    <Cards>
      {blogs.map((ele) => {
        return (
          <Card
            key={ele.id}
            title={ele.title}
            content={ele.content}
            image={ele.image}
            adminName={ele.adminName}
            adminID={ele.adminID}
            date={ele.date}
            docID={ele.id}
            likes={ele.likes}
          />
        );
      })}
    </Cards>
  );
};
export default Cards;
