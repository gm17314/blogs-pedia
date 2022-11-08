import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { titlecolor, headingfont, parafont, flex } from "../Component/Common";
import { FaRegHeart, FaRegEdit, FaHeart, FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../AuthContext";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebaseconfig";
import { Link } from "react-router-dom";

const Card = (props) => {
  const currentUser = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const docRef = doc(db, "blogs", props.docID);
  const handleLikes = async () => {
    if (props.likes.includes(currentUser.uid)) {
      var ind = props.likes.indexOf(currentUser.uid);
      props.likes.splice(ind, 1);
    } else {
      props.likes.push(currentUser.uid);
    }
    await updateDoc(docRef, { likes: props.likes });
  };

  const blogTitle = useRef();
  const blogContent = useRef();
  const handleEdit = async () => {
    setEdit(!edit);
    if (edit) {
      if (
        blogTitle.current.innerText !== null &&
        blogContent.current.innerText !== null
      ) {
        await updateDoc(docRef, { title: blogTitle.current.innerText,content: blogContent.current.innerText });
        // await updateDoc(docRef, {  });
      }
    }
  };
  const handleDelete = async () => {
    const confirm = window.confirm("Do you want to delete this blog");
    if (confirm) {
      await deleteDoc(docRef);
    }
  };

  const Card = styled.div`
    display: flex;
    height: 23rem;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 0.4rem #a7b1bb;
    overflow: hidden;
    background-color: #f4f7fa;
    margin: 2rem;
  `;
  const Left = styled.img`
    height: 100%;
    width: 30%;
  `;
  const Right = styled.div`
    height: 100%;
    width: 70%;
    padding: 1rem 1.5rem;
  `;
  const H2 = styled.h2`
    color: ${titlecolor};
    font-family: ${headingfont};
    font-size: 2.5rem;
    cursor:pointer;
    text-decoration: none;
    font-weight:bold;
  `;
  const Date = styled.span`
    color: #021f46;
    /* font-family: ${headingfont}; */
    font-size: 1.3rem;
  `;
  const Content = styled.div`
    width: 100%;
    height: 10rem;
    margin: 0.5rem 0;
    overflow: ${edit ? "auto" : "hidden"};
    border-top: 1px solid #00000021;
    border-bottom: 1px solid #00000021;
  `;
  const Title = styled.h2`
    color: black;
    font-family: ${parafont};
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    border: ${edit ? ".1rem solid grey" : 0};
  `;
  const Para = styled.p`
    color: #242323;
    /* font-family: ${parafont}; */
    font-weight: 500;
    font-size: 1.5rem;
    border: ${edit ? ".1rem solid grey" : 0};
  `;
  const Button = styled.button`
    color: white;
    background-color: ${titlecolor};
    font-family: ${headingfont};
    font-weight: 500;
    font-size: 2rem;
    border-radius: 0.4rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid blue;
    cursor: pointer;
  `;
  const Options = styled(flex)`
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    margin: 0.2rem;
    padding: 0 0.5rem;
  `;

  const Div = styled(flex)`
    width: 4%;
    justify-content: space-between;
  `;
  const Like = styled.div`
    height: 100%;
    font-size: 1.5rem;
    margin-top: 0.4rem;
    color: red;
    cursor: pointer;
  `;
  const LikeCount = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: grey;
  `;
  const Edit = styled.div`
    height: 100%;
    font-size: 2rem;
    margin-top: 0.4rem;
    color: grey;
    cursor: pointer;
  `;
  const Delete = styled.div`
    height: 100%;
    font-size: 2.1rem;
    margin-top: 0.4rem;
    color: grey;
    cursor: pointer;
  `;
  return (
    <Card>
      <Left src={props.image} />
      <Right>
        <H2 as={Link} to={`/profile/${props.adminID}`}>{props.adminName}</H2><br />
        <Date>{props.date}</Date>
        <Content>
          <Title
            ref={blogTitle}
            contentEditable={edit}
            suppressContentEditableWarning={true}
          >
            {props.title}
          </Title>
          <Para
            ref={blogContent}
            contentEditable={edit}
            suppressContentEditableWarning={true}
          >
            {props.content}
          </Para>
        </Content>
        <Button>Read</Button>
        <Options>
          <Div>
            <LikeCount>{props.likes.length}</LikeCount>
            <Like onClick={handleLikes}>
              {props.likes.includes(currentUser.uid) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </Like>
          </Div>
          {currentUser.uid === props.adminID && (
            <Edit onClick={handleEdit}>
              {edit ? <FaCheckCircle /> : <FaRegEdit />}
            </Edit>
          )}
          {currentUser.uid === props.adminID && (
            <Delete onClick={handleDelete}>
              <MdDeleteForever />
            </Delete>
          )}
        </Options>
      </Right>
    </Card>
  );
};

export default Card;
