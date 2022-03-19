import React, { useState, useRef, useContext } from "react";
import "./Home.css";
import { Context } from "../Context/Context";
import PostsItem from "./posts_item";

const Home = () => {
  const { findPost } = useContext(Context);
  return (
    <div className="container home_container">
      <ul className="posts_list">
        {findPost?.map((post) => {
          return (
            <PostsItem
              key={post.id}
              title={post.title}
              authorName={post.authorName}
              posts={post.post}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
