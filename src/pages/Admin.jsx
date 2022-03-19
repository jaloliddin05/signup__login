import React, { useState, useContext } from "react";
import "./Admin.css";
import { Context } from "../Context/Context";

const Admin = () => {
  const [parol, setParol] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const { setFindPost, findPost } = useContext(Context);

  const hendleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: findPost[findPost.length - 1].id + 1 || 0,
        authorName: author,
        title: title,
        post: post,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFindPost(data));
  };

  return (
    <div className="admin_container">
      <div className={parol === "12345" ? "admin_lock none" : "admin_lock"}>
        <label className="admin_lock_label">
          <input
            type="password"
            className="admin_lock_password"
            onChange={(e) => setParol(e.target.value)}
          />
          <span className="admin_lock_span">Enter Password</span>
        </label>
      </div>
      <h1 className="admin_heading">Welcome Admin</h1>
      <form
        className={parol === "12345" ? "admin_form" : "admin_form none"}
        onSubmit={(e) => hendleSubmit(e)}
      >
        <label className="title_label">
          Title here
          <input
            type="text"
            className="title_input"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="posts_label">
          Post
          <textarea
            name=""
            className="posts_text"
            cols="30"
            rows="10"
            required
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
        </label>
        <label className="author_label">
          Author name
          <input
            type="text"
            className="title_input"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <button type="submit" className="admin_btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Admin;
