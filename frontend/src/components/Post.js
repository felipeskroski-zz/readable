import React from 'react';

const Post = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <span>{post.author}</span>
    <p>{post.body}</p>
    <p>author: {post.author}</p>
    <p>votes: {post.voteScore}</p>
    <p>comments: {post.commentCount}</p>
    <p>timestamp: {post.timestamp}</p>
  </div>
)

export default Post
