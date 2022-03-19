import React from "react";

const PostsItem = ({ posts, title, authorName }) => {
  return (
    <li className="post_item">
      <div className="post_item_title">{title}</div>
      <div className="post_item_post">          {posts}</div>
      <div className="post_item_author">{authorName}</div>
    </li>
  );
};

export default PostsItem;
