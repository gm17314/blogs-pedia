import React, { useEffect } from "react";
import styled from "styled-components";
import MyBlogCard from "./MyBlogCard";
import { db } from "../Firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { mobile } from "./Responsive";

const MyBlogs = ({userID}) => {
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

  const Cards = styled.div`
    width: 90%;
    height: 45rem;
    margin: 4rem;
    /* display: flex; */
    /* border:1px solid red; */
    overflow: auto;
    flex-direction: column;
    /* border: 1px solid grey; */
    &::-webkit-scrollbar {
      width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: .5rem;
      background-color: grey;
    }
    ${mobile({
       height: "80%"

    })}
  `;
  return (
    <Cards>
{blogs.map((ele) => {
        return (
          userID === ele.adminID && 
          <MyBlogCard
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
export default MyBlogs;
